import { UserPreview } from "./UserPreview";

export function UserList({ users, toggleFav }) {
    return (
        <div className='user-list'>
            {
                users.map((user, idx) => {
                    return <UserPreview toggleFav={toggleFav} user={user} />
                }
                )
            }
        </div>
    )
}