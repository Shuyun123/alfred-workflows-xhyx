import alfy from "alfy";
import dict from "./dict.json" with { type: "json" };

const input = String(alfy.input).charAt(0)
const data = dict[input];

const getItems = () => {
  if (data === "未收录") {
    return [
      {
        title: `${input}：    未收录的字`,
        subtitle: "非《通用规范汉字表》国发〔2013〕23号文规定用字，故未收录",
        arg: input
      }
    ];
  } else if (data && data.length > 0) {
    return [
      {
        title: data[0],
        arg: input
      },
      {
        title: `拆　分：     ${data[1]}`,
        arg: input
      },
      {
        title: `首　末：     ${data[2]}     ${data[3]}`,
        arg: input
      },
      {
        title: `编　码：     ${data[4]}     ${data[5]}`,
        arg: input
      },
      {
        title: `https://www.zdic.net/hans/${input}`,
        arg: input
      }
    ];
  } else {
    return [
      {
        title: "查询错误",
        arg: input
      }
    ];
  }
};

alfy.output(getItems());
