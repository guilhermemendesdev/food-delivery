import ResetPassword from '@/src/shared/Auth/ResetPassword';
import React from 'react';

const Page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const activationToken = searchParams['verify'] ?? '';

  return (
    <div>
      <ResetPassword activationToken={activationToken} />
    </div>
  );
};

export default Page;
