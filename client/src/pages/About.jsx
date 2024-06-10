import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About VidhyaVerse
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to VidhyaVerse! This was created by Raghav Kanungo as a
              personal project to share his thoughts and ideas with the world.
              Raghav is a developer who loves to write about technology and
              coding.
            </p>

            <p>
              Raghav is currently in his 7th semester of Information Technology
              at the Institute for Engineering and Technology, DAVV.
            </p>

            <p>
              On this website, you'll find articles and tutorials on topics such
              as web development, software engineering, and programming
              languages. Be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
