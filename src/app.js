"use strict";
const el = id => document.getElementById(id);
function line(parent, text, tag = "li") { const node = document.createElement(tag); node.textContent = text; parent.append(node); return node; }
async function read(path) { const r = await fetch(path); if (!r.ok) throw Error("Demo data unavailable."); return r.json(); }
function grow() { const q = el("question"); q.style.height = "auto"; q.style.height = Math.min(q.scrollHeight, 220) + "px"; }
el("launcher").onclick = () => { el("panel").hidden = false; el("launcher").hidden = true; grow(); el("question").focus(); };
el("minimize").onclick = () => { el("panel").hidden = true; el("launcher").hidden = false; el("launcher").focus(); };
el("mode").onchange = () => { el("context").textContent = el("mode").value === "general" ? "General intelligence · project context excluded" : "Project: Synthetic RNA Delivery Study"; };
el("question").oninput = grow;
el("question").onkeydown = event => { if (event.key === "Enter" && !event.shiftKey && !event.isComposing) { event.preventDefault(); el("composer").requestSubmit(); } };
el("composer").onsubmit = async event => {
  event.preventDefault(); const q = el("question"), text = q.value.trim(); if (!text || el("send").disabled) return;
  const mode = el("mode").value; el("send").disabled = true; line(el("messages"), "You: " + text, "p"); const pending = line(el("messages"), "NoD is working…", "p");
  try {
    const response = await fetch("/ask", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({question: text, mode, project_id: "study-a"})});
    const data = await response.json(); if (!response.ok) throw Error(data.message);
    pending.textContent = "NoD: " + data.answer;
    for (const source of data.sources) { const url = new URL(source.url); if (!["https:", "http:"].includes(url.protocol)) continue; const a = line(el("messages"), source.title, "a"); a.href = url.href; a.target = "_blank"; a.rel = "noopener noreferrer"; }
    el("attribution").textContent = data.provider_execution ? "Powered by Meta Muse Spark through Meta Model API." : "Offline · no model calls";
    if (q.value.trim() === text) q.value = ""; grow(); el("usage").textContent = JSON.stringify((await read("/usage")).records, null, 2);
  } catch (error) { pending.textContent = error.message; }
  finally { el("send").disabled = false; el("messages").scrollTop = el("messages").scrollHeight; }
};
read("/project").then(project => {
  el("projectName").textContent = project.name; el("objective").textContent = project.objective;
  const done = project.tasks.filter(t => t.status === "Complete").length;
  el("health").textContent = done + " / " + project.tasks.length + " recorded tasks complete"; el("progress").value = done / project.tasks.length * 100;
  project.findings.forEach(x => line(el("findings"), x)); project.team.forEach(x => line(el("team"), x.name + " · " + x.role)); project.documents.forEach(x => line(el("documents"), x)); project.tasks.forEach(x => line(el("tasks"), x.title + " · " + x.status));
}).catch(error => { el("projectName").textContent = error.message; });
