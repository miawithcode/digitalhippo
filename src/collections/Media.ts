import { User } from '../payload-types';
import { Access, CollectionConfig } from 'payload/types';

const isAdminOrHasAccessToImages =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | null;

    if (!user) return false;
    if (user.role === 'admin') return true;

    return {
      user: {
        equals: req.user.id, // if this user owns this image
      },
    };
  };

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id }; // associate image with the user that created it
      },
    ],
  },
  access: {
    read: async ({ req }) => {
      const referer = req.headers.referer;

      // if user is not login and not on admin page
      // should be able to view all images
      if (!req.user || !referer?.includes('sell')) {
        return true;
      }

      return await isAdminOrHasAccessToImages()({ req });
    },
    delete: ({ req }) => isAdminOrHasAccessToImages()({ req }),
    update: ({ req }) => isAdminOrHasAccessToImages()({ req }),
  },
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
