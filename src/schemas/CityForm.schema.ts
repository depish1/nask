import { z } from "zod";

import { cityNameRegExp } from "Helpers/regexes";
import { isValidImg } from "Helpers/isValidImg";
import { isValidUrl } from "Helpers/isValidUrl";

export const cityFormSchema = z.object({
  name: z.string().trim().nonempty("To pole jest wymagane.").regex(cityNameRegExp, {
    message: "Nazwa miasta może zawierać tylko małe i duże litery polskiego alfabetu oraz myślniki.",
  }),
  voivodeship: z.string().trim().nonempty("To pole jest wymagane."),
  description: z
    .string()
    .trim()
    .nonempty("To pole jest wymagane.")
    .min(25, "Minimalna ilość znaków to 25.")
    .max(2000, "Maksymalna ilość znaków to 2000."),
  picture_url: z
    .string()
    .trim()
    .nonempty("To pole jest wymagane.")
    .refine((value) => isValidUrl(value), "Niepoprawny URL")
    .refine(async (value) => await isValidImg(value), "Ten URL nie prowadzi do obrazka."),
  known_places: z
    .string()
    .trim()
    .nonempty("To pole jest wymagane.")
    .min(10, "Minimalna ilość znaków to 10.")
    .max(40, "Maksymalna ilość znaków to 40."),
  links: z
    .string()
    .trim()
    .nonempty("To pole jest wymagane.")
    .refine((value) => value.split(",").every((link) => isValidUrl(link.trim())), "Linki zawierają niepoprawne URLe."),
});
