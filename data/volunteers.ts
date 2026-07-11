import { Volunteer } from "@/lib/types";

export const volunteers: Volunteer[] = [
  {
    name: "Anna Peter",
    role: "Chairperson",
    image: "/team/anna_peter-psachairperson.png",
    rank: "leadership",
  },
  {
    name: "Dr. Godfrey Smart",
    role: "General Secretary",
    image: "/team/Dr.Godfrey_Smart-psageneralsecretary.png",
    rank: "leadership",
  },
  {
    name: "Dr. Saul Shemdoe",
    role: "Founding Member & Treasurer",
    image: "/team/DR.SAUL_SHEMDOE-foundingmemberandtreasurer.png",
    rank: "leadership",
  },
  {
    name: "Dr. Jacquiline Tungaraza",
    role: "Member",
    image: "/team/Dr.Jacquiline_tungaraza-member.png",
    rank: "member",
  },
  {
    name: "Jacob Kashililika",
    role: "Member",
    image: "/team/jacob_kashililika-Member.png",
    rank: "member",
  },
  {
    name: "Mwajabu Mshana",
    role: "Member",
    image: "/team/Mwajabu_Mshana-member.png",
    rank: "member",
  },
];

export const leadership = volunteers.filter((v) => v.rank === "leadership");
export const members = volunteers.filter((v) => v.rank === "member");
