import React from "react";
import Teams from "../Components/Teams";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <img
          className="min-w-full h-[90vh]"
          src="https://images.unsplash.com/photo-1708546991069-6f615dc28057?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[100vh]">
        <div className="text-3xl font-bold my-5">About Us</div>
        <div className="w-3/4 my-5">
          Everybody should learn to program a computer because it teaches you
          how to think. Being Coding Club of a technical institution, we do each
          and every stuff related to coding. Coding events, Workshops, Query
          sessions, contests are just to name a few. We believe in " Coding like
          poetry should be short and concise. Spreading knowledge and growing of
          competitive coding culture is at the root of the existence of this
          club. We provide a mutual helping platform for the students and guide
          them in their journey of programming." Some great initiatives were
          taken by the current secretaries, including the formation of smaller
          groups focussed on specific areas (competitive programming group,
          development group and machine learning group) and the fresher's
          mentorship program. We hope that we are able to take this momentum
          forward.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">Our Amazing Team</div>
        <div className="w-3/4 mt-5">
          Every Club needs someone at Lead to guide , support and show you the
          right path before making a mistake. we are very fortunate that we have
          such team.
        </div>
      </div>
      <div className="my-5">
        <Teams />
      </div>
      <Footer />
    </>
  );
}
