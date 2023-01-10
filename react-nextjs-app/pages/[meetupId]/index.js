import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getMeetup, listMeetups } from "../../lib/api";

const Meetup = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.id}</title>
        <meta name="description" content={props.meetup.description}></meta>
      </Head>
      <MeetupDetail {...props.meetup} />;
    </>
  );
};

export const getStaticPaths = async () => {
  const meetups = await listMeetups();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.id },
    })),
  };
};

// dedicated function that is called in build process before rendering page
export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  // fetch data from an API
  try {
    const meetup = await getMeetup({ meetupId });
    return {
      props: {
        meetup: meetup,
      },
      revalidate: 3,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        meetup: {},
      },
      revalidate: 3,
    };
  }
};

export default Meetup;
