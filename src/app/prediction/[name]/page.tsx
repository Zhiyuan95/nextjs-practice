import React from "react";

const fetchPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const fetchPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const fetchPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

const page = async ({ params }: Params) => {
  const predictedAge = fetchPredictedAge(params.name);
  const predictedGender = fetchPredictedGender(params.name);
  const predictedCountry = fetchPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    predictedAge,
    predictedGender,
    predictedCountry,
  ]);

  //name here refers to the variable [name] in folder router
  // <div>{params.name}</div>
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Personal Info
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Age: {age?.age}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Gender: {gender?.gender}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Nationality: {country?.country[0].country_id}
        </div>
      </div>
    </div>
  );
};

export default page;
