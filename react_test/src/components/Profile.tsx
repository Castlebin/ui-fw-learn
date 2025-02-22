// 数据。user 代表一份用户数据，包含了用户的名字、头像地址、头像大小等信息。
// 使用数据。在 Profile 组件中，我们使用 user 中的数据，展示用户的名字和头像。
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

// 使用数据
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>  {/* 使用数据 */}
      <img
        className="avatar"
        src={user.imageUrl} // 使用数据
        alt={"Photo of " + user.name}  // 使用数据
        style={{
          width: user.imageSize,  // 使用数据
          height: user.imageSize, // 使用数据
        }}
      />
    </>
  );
}
