import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg',
        address: "Nehru Maidan Vambori, Rahuri 10",
        description: 'A first meetup description'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg',
        address: "Nehru Maidan Vambori, Rahuri 20",
        description: 'A Second meetup description'
    }
];

function Homepage(props) {
    return (
            <MeetupList meetups={props.meetups} />
    )       
}

// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     }
// }

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from an api

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default Homepage;