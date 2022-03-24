import { DefaultService } from "./generated";

export async function hello() {
  const result = await DefaultService.getUserByName("john doe");
  return result;
}
