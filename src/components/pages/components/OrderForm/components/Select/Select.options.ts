export interface Option {
  value: string;
  label: string;
}

export const workTypeOptions = [
  {
    value: "edit",
    label: "Редагування",
  },
  {
    value: "translate",
    label: "Переклад",
  },
];

export const editOptions = [
  { value: "ua", label: "Українська" },
  { value: "ru", label: "Російська" },
  { value: "en", label: "Англійська" },
  { value: "enNative", label: "Англійська (носій)" },
];

export const translateOptions = [
  { value: "ukr/ruToEn", label: "Українська/російська — англійська" },
  { value: "enToUkr", label: "Англійська — українська" },
  { value: "enToRu", label: "Англійська — російська" },
  { value: "ruToUkr", label: "Російська — українська" },
  { value: "ukrToRu", label: "Українська — російська" },
];
