import { atom } from "recoil";

export const productsAtom = atom({
  key: "products-veggie-and-fruit",
  default: [
    { productId: "PRD01", productName: "Apple" },
    { productId: "PRD02", productName: "Banana" },
    { productId: "PRD03", productName: "Tomato" },
    { productId: "PRD04", productName: "Garlic" },
    { productId: "PRD05", productName: "Onion" },
  ],
});

export const contactsAtom = atom({
  key: "contacts-atom",
  default: [
    {
      name: "Abdul Hadi Panggar Bessy",
      image: "https://ntvb.tmsimg.com/assets/assets/517125_v9_bb.jpg",
      email: "abdul.hadi@gmail.com",
      phone: "082181920011",
    },
    {
      name: "Muhammad Maulana",
      image:
        "https://media.licdn.com/dms/image/C5603AQEaEYwV-1sExQ/profile-displayphoto-shrink_800_800/0/1649435511471?e=2147483647&v=beta&t=fK5Dj_W_YrjbB0PaPnEl3_1vZtIH13k6wOAI9YzMNdI",
      email: "muhammadmaulana.1899@gmail.com",
      phone: "085781920099",
    },
    {
      name: "Nadia Syavira",
      image:
        "https://th.bing.com/th/id/OIP.6gXbgIw4YhpfgzfU6aEYSgAAAA?rs=1&pid=ImgDetMain",
      email: "nadiasyavira@icloud.com",
      phone: "087681120021",
    },
  ],
});
