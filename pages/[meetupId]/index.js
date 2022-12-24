
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            img="https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg"
            title='A First Meetup'
            address='Nehru Maidan Vambori'
            description='A first meetup'
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1"
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                img: "https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg",
                title: 'A First Meetup',
                address: 'Nehru Maidan Vambori',
                description: 'A First Meetup'
            }
        }
    }
}

export default MeetupDetails;