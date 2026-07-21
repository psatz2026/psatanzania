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
    role: "Treasurer",
    image: "/team/DR.SAUL_SHEMDOE-foundingmemberandtreasurer.png",
    rank: "leadership",
  },
  {
    name: "Dr. Jacquiline Tungaraza",
    role: "Member",
    image: "/team/Dr.Jacquiline_tungaraza-member.png",
    rank: "leadership",
  },
  {
    name: "Jacob Kashililika",
    role: "Member",
    image: "/team/jacob_kashililika-Member.png",
    rank: "leadership",
  },
  {
    name: "Mwajabu Mshana",
    role: "Member",
    image: "/team/Mwajabu_Mshana-member.png",
    rank: "leadership",
  },
];

export const leadership = volunteers.filter((v) => v.rank === "leadership");
export const members = volunteers.filter((v) => v.rank === "member");
