import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage () {

    const onAddMeetup = (enteredData) => {
        console.log(enteredData);
    };

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}

export default NewMeetupPage;