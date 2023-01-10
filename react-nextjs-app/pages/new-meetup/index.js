import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { createMeetup } from "../../lib/api";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetup) => {
    try {
      await createMeetup(meetup);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
