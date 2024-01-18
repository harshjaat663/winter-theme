document.addEventListener("DOMContentLoaded", function () {
  const snowfallContainer = document.querySelector(".snowfall");

  for (let i = 0; i < 10; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake3";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 25+9+"s";
    snowflake.style.animationDelay = Math.random() + "s";
    snowfallContainer.appendChild(snowflake);
  }
  for (let i = 0; i < 20; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake2";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 25+9+"s";
    snowflake.style.animationDelay = Math.random() + "s";
    snowfallContainer.appendChild(snowflake);
  }
  for (let i = 0; i < 30; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 25+9+"s";
    snowflake.style.animationDelay = Math.random() + "s";
    snowfallContainer.appendChild(snowflake);
  }
});
