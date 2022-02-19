import axios from "axios";
import { getQAByID } from "./endpoints";

export const getQAById = (id: any) => {
  axios
    .get(`${getQAByID}?id=${id}`)
    .then(function (response) {
      // handle success
      console.log({ QA: response.data });
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const updateQA = (id: any, question: any, answer: any) => {
    axios
      .put(`${updateQA}?id=${id}`, {
          question,
          answer
      })
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const getALLQA = () => {
    axios
      .get(`${getALLQA}`)
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log({error});
      })
      .then(function () {
        // always executed
      });
  };

  export const addQA = (id: any, question: any, answer: any) => {
    axios
      .post(`${addQA}?id=${id}`, {
          question,
          answer
      })
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const deleteQA = (id: any) => {
    axios
      .delete(`${deleteQA}?id=${id}`)
      .then(function (response) {
        // handle success
        console.log({ QA: response.data });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  