import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://s.cn.bing.net/th?id=OHR.HummockIce_ZH-CN9917832145_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://s.cn.bing.net/th?id=OHR.HummockIce_ZH-CN9917832145_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
