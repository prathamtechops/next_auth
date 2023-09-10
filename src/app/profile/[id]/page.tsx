export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1>Profile Page</h1>
            {params.id}
        </div>
    );
}
