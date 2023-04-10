import { ChangeEvent, useEffect, useState } from "react";
import {
  SFormContainer,
  SForm,
  SFormInputs,
  SFormSubmit,
} from "./OrderForm.styles";
import { SHeader3 } from "./components/Header";
import { SCloseBtn, SMediaCloseBtn } from "./components/CloseBtn";
import { SSubmitBtn } from "./components/SubmitBtn";
import {
  SPriceWrapper,
  SPriceCurrency,
  SPriceNumber,
} from "./components/Price";
import { STime } from "./components/Time";
import {
  SWrapper,
  SPlaceholderAndUpload,
  SInputWrapper,
  STextArea,
  STextInputsWrapper,
  SUploadInput,
  SUploadLabel,
} from "./components/OrderItems";
import {
  editOptions,
  translateOptions,
  Option,
  workTypeOptions,
} from "./components/Select/Select.options";
// import { calcDeadline } from "./logic";
import { CustomSelect } from "./components/Select/Select";
import { CustomInput } from "./components/Input/Input";
import { calcDeadline, calcPrice, calcTime } from "./logic";

const OrderForm = () => {
  // logic
  const [price, setPrice] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [lang, setLang] = useState<Option | null>(null);
  const [text, setText] = useState<string>("");
  const [mimetype, setMimetype] = useState<string>("other");
  // options for selects
  const [editType, setEditType] = useState<Option | null>(null);
  const [langOptions, setLangOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();
  const [isFocusedTextArea, setIsFocusedTextArea] = useState<boolean>(false);

  // edit type select handler
  const handleWorkTypeSelect = (opt: Option) => {
    setEditType(opt);
    if (opt.value === "edit") setLangOptions(editOptions);
    if (opt.value === "translate") setLangOptions(translateOptions);
    if (opt !== editType) {
      setLang(null);
      setPrice(0);
      setTime("");
    }
  };

  // lang select handler
  const handleLangSelect = (opt: Option) => {
    setLang(opt);
  };

  // Not need
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const getPrice = () => {
    if (!editType || !lang || text.length == 0) return;
    const calculatedPrice = calcPrice(lang.value, mimetype, text.length);
    const timeForOrder = calcTime(lang.value, mimetype, text.length);
    if (typeof calculatedPrice === "string" || typeof timeForOrder === "string")
      return;
    const deadline = calcDeadline(timeForOrder, Date.now());
    setPrice(Number(calculatedPrice.toFixed(2)));
    setTime(deadline.deadlineDate);
  };

  useEffect(() => {
    getPrice();
  }, [text, lang]);

  return (
    <SFormContainer>
      <SForm>
        <SFormInputs>
          <SHeader3>Замовити переклад або редагування</SHeader3>
          <SInputWrapper>
            <CustomSelect
              label="Послуга"
              options={workTypeOptions}
              value={editType}
              onChange={(opt) => handleWorkTypeSelect(opt)}
            ></CustomSelect>
          </SInputWrapper>
          <SWrapper>
            <STextArea
              focused={isFocusedTextArea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocusedTextArea(true)}
              onBlur={() => setIsFocusedTextArea(false)}
            />
            <SPlaceholderAndUpload show={text.length > 0 ? false : true}>
              Введіть текст або&nbsp;
              <SUploadLabel>
                завантажте файл
                <SUploadInput
                  type="file"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
                  onChange={handleFile}
                ></SUploadInput>
              </SUploadLabel>
            </SPlaceholderAndUpload>
          </SWrapper>
          <STextInputsWrapper>
            <SInputWrapper>
              <CustomInput
                label="Ваша електронна пошта"
                name="email"
              ></CustomInput>
            </SInputWrapper>
            <SInputWrapper>
              <CustomInput label="Ваше ім’я" name="name"></CustomInput>
            </SInputWrapper>
            <SInputWrapper>
              <CustomInput
                label="Коментар або покликання"
                name="comment"
              ></CustomInput>
            </SInputWrapper>
            <SInputWrapper>
              <CustomSelect
                label={editType?.value === "translate" ? "Мовна пара" : "Мова"}
                options={langOptions}
                value={lang}
                onChange={handleLangSelect}
              ></CustomSelect>
            </SInputWrapper>
          </STextInputsWrapper>
        </SFormInputs>
        <SFormSubmit>
          <SCloseBtn />
          <SPriceWrapper>
            <SPriceNumber>{price}</SPriceNumber>
            <SPriceCurrency>грн</SPriceCurrency>
          </SPriceWrapper>
          <STime>{time}</STime>
          <SSubmitBtn>Оформити замовлення</SSubmitBtn>
        </SFormSubmit>
        <SMediaCloseBtn />
      </SForm>
    </SFormContainer>
  );
};

export default OrderForm;
