import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { listMeetups } from "../lib/api";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="A React Meetups demo"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

// dedicated function that is called in build process before rendering page
export const getStaticProps = async () => {
  // fetch data from an API
  try {
    const meetups = await listMeetups();
    return {
      props: {
        meetups,
      },
      revalidate: 3,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        meetups: [],
      },
      // revalidate: 10,
    };
  }
};

export default HomePage;
