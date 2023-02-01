import type { APIRoute } from "astro";

const users = [
  { id: 1, name: "Suzuki" },
  { id: 2, name: "Tanaka" },
];

export const get: APIRoute = ({ params, request }) => {
  const id = Number(params.id);
  const user = users.find((user) => user.id === id);

  return {
    body: JSON.stringify({
      id: user ? user.id : "0",
      name: user ? user.name : "Astro",
      url: "https://astro.build/",
    }),
  };
};
