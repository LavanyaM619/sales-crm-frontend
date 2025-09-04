import { getSession } from "next-auth/react";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Sales CRM Dashboard</h1>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
