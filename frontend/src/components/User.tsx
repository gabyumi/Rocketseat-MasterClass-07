import React from "react";
interface IUser {
  name: string;
  email: string;
}
interface Props {
  user: IUser;
}
// export default function User({ user }: Props) {//children não é aceito
export const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name}
      <br />
      <strong>Email: </strong> {user.email}
      <br />
      <br />
    </div>
  );
};
