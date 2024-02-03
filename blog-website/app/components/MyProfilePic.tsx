import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section>
      <Image
        src="/images/profile-picture.png"
        width={200}
        height={200}
        priority={true}
        alt="Zahari Cheyrekov"
      />
    </section>
  );
}
