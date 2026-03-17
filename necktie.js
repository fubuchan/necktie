<script>
const ws = new WebSocket("wss://necktie.onrender.com");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const payload = {
    type: "tie_input",
    user_name: document.getElementById("user_name").value,
    user_city: document.getElementById("user_city").value,
    user_job: document.getElementById("user_job").value,
    father_name: document.getElementById("father_name").value,
    father_city: document.getElementById("father_city").value,
    father_job: document.getElementById("father_job").value,
    learned_from_father: document.getElementById("learned_from_father").value,
    tie_note: document.getElementById("tie_note").value
  };

  console.log("送信:", payload);
  ws.send(JSON.stringify(payload));
});
</script>
