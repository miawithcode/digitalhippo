import MaxWidthWrapper from './MaxWidthWrapper';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import SingleBenefit from './SingleBenefit';

const benefits = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Receive immediate access to your email and download your assets without delay',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure the highest quality. Not happy? we offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales towards the preservation and restoration of the natural environment.",
  },
];

const BenefitsList = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {benefits.map((benefit) => {
            return <SingleBenefit key={benefit.name} {...benefit} />;
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default BenefitsList;
