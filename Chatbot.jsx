import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import axios from "axios";

export default function Chatbot() {
  const [qa, setQa] = useState([]);
  const [first, setFirst] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  function listQA() {
    axios.get(`http://localhost:9000/app/allQA`).then((data) => {
      setQa(data.data);
      console.log("data is loaded === ", data.data);
      console.log({
        id: data.data[0]._id,
        message: data.data[0].question,
        trigger: "2",
      });
      

      if (!Array.isArray(data.data) || data.data.length < 1) return;
      
      const questions = [];
      const answers = [];
      data.data.forEach((item, index) => {
        questions.push({
          value: index + 1,
          label: item.question,
          trigger: index + 5,
        });
        answers.push({
          id: `${index + 5}`,
          message: item.answer,
          trigger: "3",
        });
      });
      setQuestions(questions);
      setAnswers(answers);
    });
  }
  useEffect(() => {
    listQA();
  }, []);
  if (questions.length > 0 && answers.length > 0) {
    console.log({ questions, answers });
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hi ! Welcome to Nova ! What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message:
              "Hi {previousValue}, if you want to know more about us please choose one of the following :",
            trigger: "4",
          },
          
          

          {
            id: "4",
            options: [...questions],
           
          },
          ...answers,
         
        ]}
      />
    );
  } else return <></>;
}
