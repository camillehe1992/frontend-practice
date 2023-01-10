import MeetupDetail from "../../components/meetups/MeetupDetail";

const mock_meetup = {
  id: "m1",
  title: "A First Meetup",
  image:
    "https://s.cn.bing.net/th?id=OHR.HummockIce_ZH-CN9917832145_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50",
  address: "Some address 5, 12345 Some City",
  description: "This is a first meetup!",
};

const Meetup = () => {
  return <MeetupDetail {...mock_meetup} />;
};

export default Meetup;
