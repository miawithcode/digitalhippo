import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({token}) => {
        return `<p>Please verify your email</p>`
      }
    }
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      defaultValue: "user",
      required: true,
      admin: {
        // condition: ({req}) => req.user.role === "admin"
        condition: () => false,
      },
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
};
