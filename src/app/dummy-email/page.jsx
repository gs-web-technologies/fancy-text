import Form from "@/components/dummy-email/Form";
import Inbox from "@/components/dummy-email/Inbox";

export default function DummyEmail() {

    const generateRandomEmail = () => {
        return 'test@yopmail12.com';
    }
    const email = generateRandomEmail();

    const dummyMails = [
        {
            id: 1,
            from: "noreply@github.com",
            subject: "Verify your email",
            time: "2 min ago",
            message: "You have finally selected 1 mail",
            read: false,
        },
        {
            id: 2,
            from: "support@google.com",
            subject: "Security alert",
            time: "10 min ago",
            message: "You have finally selected 2 mail",
            read: true,
        },
        {
            id: 3,
            from: "admin@yourapp.com",
            subject: "Welcome to our service 🎉",
            time: "1 hr ago",
            message: "You have finally selected 3 mail",
            read: true,
        },
    ];

    return (
        <div>
            <div className="flex flex-col gap-7">
                <Form email={email} />
                <Inbox dummyMails={dummyMails} />
            </div>
        </div>
    );
}