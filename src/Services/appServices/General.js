import {
  GetpatientVitalsDetailsByUserId,
  InsertUpdateDailyVitalsOfPatient,
} from '../constants/url';
import {fetch, store} from '../utils/httpUtil';

export const GetpatientVitalsDetailsByUserIdApi = async (
  data,
  successCallback,
) => {
  try {
    const response = await fetch(
      `${GetpatientVitalsDetailsByUserId}?userid=${data.userid}`,
    );
    if (response?.status === 200) {
      successCallback(response?.data?.ItemList);
    } else successCallback([]);
  } catch (error) {
    successCallback([]);
  }
};

export const InsertUpdateDailyVitalsOfPatientApi = async (
  data,
  successCallback,
) => {
  try {
    // let formData = generateUrlEncodedData(data);
    // console.log('This is the data', data);
    let response = await store(InsertUpdateDailyVitalsOfPatient, data);

    if (response?.status === 200) {
      // console.log('hello guys');
      successCallback(response?.data);
    } else successCallback([]);
  } catch (error) {
    // console.log('errorsssssssssssssssssssssss', error);
    successCallback([]);
  }
};
