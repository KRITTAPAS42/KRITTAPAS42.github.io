// Data array with multiple formulas
const data = [
{
abbreviation: "s,u,v,a,t",
name: "การเคลื่อนที่ในแนวตรง",
unit: "v: ความเร็วปลาย (m/s), u: ความเร็วต้น (m/s), a: ความเร่ง (m/s²), t: เวลา (s), s: ระยะทาง (m)",
formulas: [
    "v = u + at",
    "s = ut + 0.5at²",
    "v² = u² + 2as",
    "s = vt - 0.5at²",
    "s = ((u + v)/2)t"
]
},
{
"abbreviation": "F, m, a, Δp, Δt, p, v, W, d, θ, P, u, s",
"name": "แรงและกฎการเคลื่อนที่",
"unit": "F: แรง (N), m: มวล (kg), a: ความเร่ง (m/s²), Δp: การเปลี่ยนแปลงโมเมนตัม (kg·m/s), Δt: ช่วงเวลา (s), p: โมเมนตัม (kg·m/s), v: ความเร็ว (m/s), W: การทำงาน (J), d: ระยะทาง (m), θ: มุมระหว่างทิศทางของแรงกับทิศทางการเคลื่อนที่, P: กำลัง (W), u: ความเร็วเริ่มต้น (m/s), s: ระยะทาง (m)",
"formulas": [
    "F = ma",
    "F = Δp / Δt",
    "p = mv",
    "W = Fd cos(θ)",
    "P = Fv",
    "v = u + at",
    "s = ut + 0.5at²",
    "v² = u² + 2as",
    "s = vt - 0.5at²",
    "s = ((u + v)/2)t"
]
},
{
"abbreviation": "F, N, W, T, θ, d",
"name": "สมดุลกล",
"unit": "F: แรง (N), N: แรงปฏิกิริยา (N), W: น้ำหนัก (N), T: แรงตึง (N), θ: มุม (°), d: ระยะทาง (m)",
"formulas": [
    "ΣF = 0", 
    "ΣT = 0", 
    "W = mg", 
    "T = W / sin(θ)"
]
},
{
"abbreviation": "W, F, d, θ, P, v, m, a",
"name": "งานและพลังงาน",
"unit": "W: การทำงาน (J), F: แรง (N), d: ระยะทาง (m), θ: มุมระหว่างทิศทางของแรงกับทิศทางการเคลื่อนที่, P: กำลัง (W), v: ความเร็ว (m/s), m: มวล (kg), a: ความเร่ง (m/s²)",
"formulas": [
    "W = Fd cos(θ)",
    "P = Fv",
    "K.E. = 0.5mv²",
    "P = ΔE / Δt",
    "E = W"
]
},
{
"abbreviation": "p, m, v, Δp, Δt, F, v1, v2",
"name": "โมเมนตัมและการชน",
"unit": "p: โมเมนตัม (kg·m/s), m: มวล (kg), v: ความเร็ว (m/s), Δp: การเปลี่ยนแปลงโมเมนตัม (kg·m/s), Δt: ช่วงเวลา (s), F: แรง (N), v1: ความเร็วก่อนชน (m/s), v2: ความเร็วหลังชน (m/s)",
"formulas": [
    "p = mv",
    "F = Δp / Δt",
    "v1 - v2 = (m2 / m1) * (v1' - v2')"
]
},
{
"abbreviation": "r, v, ω, T, a_c, F_c, m",
"name": "การเคลื่อนที่แนวโค้ง",
"unit": "r: รัศมี (m), v: ความเร็วเชิงเส้น (m/s), ω: ความเร็วเชิงมุม (rad/s), T: เวลาในการหมุนหนึ่งรอบ (s), a_c: ความเร่งในทิศทางศูนย์กลาง (m/s²), F_c: แรงศูนย์กลาง (N), m: มวล (kg)",
"formulas": [
    "v = rω",
    "a_c = v² / r",
    "F_c = ma_c",
    "T = 2πr / v"
]
},
{
"abbreviation": "A, x, ω, T, k, m, F, v, a",
"name": "การเคลื่อนที่ SHM",
"unit": "A: แอมพลิจูด (m), x: การเคลื่อนที่ (m), ω: ความเร็วเชิงมุม (rad/s), T: ระยะเวลาในการสั่นหนึ่งรอบ (s), k: ค่าคงที่สปริง (N/m), m: มวล (kg), F: แรง (N), v: ความเร็ว (m/s), a: ความเร่ง (m/s²)",
"formulas": [
    "F = -kx",
    "v = Aωcos(ωt)",
    "a = -Aω²sin(ωt)",
    "T = 2π√(m / k)"
]
},
{
"abbreviation": "λ, v, f, T, A, ω, k",
"name": "คลื่น",
"unit": "λ: ความยาวคลื่น (m), v: ความเร็วคลื่น (m/s), f: ความถี่ (Hz), T: ระยะเวลารอบ (s), A: แอมพลิจูด (m), ω: ความเร็วเชิงมุม (rad/s), k: ค่าคงที่คลื่น (rad/m)",
"formulas": [
    "v = fλ",
    "f = 1 / T",
    "ω = 2πf",
    "k = 2π / λ"
]
},
{
"abbreviation": "c, λ, f, E, P, I",
"name": "แสงเชิงคลื่น",
"unit": "c: ความเร็วแสง (m/s), λ: ความยาวคลื่น (m), f: ความถี่ (Hz), E: พลังงานของฟอตอน (J), P: กำลัง (W), I: ความเข้มของแสง (W/m²)",
"formulas": [
    "c = λf",
    "E = hf",
    "P = I A",
    "I = P / A",
    "λ = c / f"
]
},
{
"abbreviation": "E, c, n, λ",
"name": "แสงเชิงรังสี",
"unit": "E: พลังงานของรังสี (J), c: ความเร็วแสง (m/s), n: ดัชนีหักเห, λ: ความยาวคลื่น (m)",
"formulas": [
    "E = hc / λ",
    "n = sin(θi) / sin(θr)",
    "c = λf",
    "E = hf"
]
},
{
"abbreviation": "v, d, t, λ, f, v_sound",
"name": "เสียง",
"unit": "v: ความเร็วเสียง (m/s), d: ระยะทาง (m), t: เวลา (s), λ: ความยาวคลื่น (m), f: ความถี่ (Hz), v_sound: ความเร็วเสียง (m/s)",
"formulas": [
    "v = d / t",
    "λ = v_sound / f",
    "v_sound = 331.3 + (0.6 × T)",
    "f = v / λ"
]
},
{
"abbreviation": "F, k, q1, q2, r",
"name": "ไฟฟ้าสถิต",
"unit": "F: แรงไฟฟ้า (N), k: ค่าคงที่คูลอมบ์ (N·m²/C²), q1, q2: ประจุไฟฟ้า (C), r: ระยะห่างระหว่างประจุ (m)",
"formulas": [
    "F = k × (q1 × q2) / r²"
]
},
{
"abbreviation": "V, I, R, P, t, Q",
"name": "ไฟฟ้ากระแส",
"unit": "V: แรงดัน (V), I: กระแส (A), R: ความต้านทาน (Ω), P: กำลัง (W), t: เวลา (s), Q: ประจุ (C)",
"formulas": [
    "V = IR",
    "P = IV",
    "P = I²R",
    "Q = It",
    "R = ρ(L / A)"
]
},
{
"abbreviation": "B, I, A, F, θ",
"name": "แม่เหล็กและไฟฟ้า",
"unit": "B: ความหนาแน่นของสนามแม่เหล็ก (T), I: กระแสไฟฟ้า (A), A: พื้นที่ (m²), F: แรง (N), θ: มุมระหว่างทิศทางกระแสกับสนามแม่เหล็ก",
"formulas": [
    "F = BIL sin(θ)",
    "Φ = B A",
    "E = vB"
]
},
{
"abbreviation": "Q, m, c, ΔT",
"name": "ความร้อนและแก๊ส",
"unit": "Q: ความร้อนที่ถ่ายโอน (J), m: มวล (kg), c: ความจุความร้อน (J/kg·K), ΔT: การเปลี่ยนแปลงอุณหภูมิ (K)",
"formulas": [
    "Q = mcΔT",
    "PV = nRT",
    "R = 8.314 J/(mol·K)"
]
},
{
"abbreviation": "F, A, P, ε",
"name": "ของแข็ง",
"unit": "F: แรง (N), A: พื้นที่ (m²), P: ความดัน (Pa), ε: ความเครียด",
"formulas": [
    "P = F / A",
    "σ = ε / E"
]
},
{
"abbreviation": "ρ, m, V, v",
"name": "ของไหล",
"unit": "ρ: ความหนาแน่น (kg/m³), m: มวล (kg), V: ปริมาตร (m³), v: ความเร็ว (m/s)",
"formulas": [
    "ρ = m / V",
    "v = (1 / ρ) × F",
    "Q = vA"
]
},
{
"abbreviation": "E, c, λ, f",
"name": "คลื่นแม่เหล็กไฟฟ้า",
"unit": "E: พลังงาน (J), c: ความเร็วแสง (m/s), λ: ความยาวคลื่น (m), f: ความถี่ (Hz)",
"formulas": [
    "E = hf",
    "c = λf"
]
},
{
"abbreviation": "n, R, λ, T",
"name": "ฟิสิกส์อะตอม",
"unit": "n: จำนวนอนุภาค, R: ค่าคงที่ของแก๊ส (J/mol·K), λ: ความยาวคลื่น (m), T: อุณหภูมิ (K)",
"formulas": [
    "E = -13.6 × (Z² / n²)",
    "λ = h / mv"
]
},
{
"abbreviation": "m, u, v, E, p",
"name": "ฟิสิกส์นิวเคลียร์",
"unit": "m: มวล (kg), u: พลังงานมวล (MeV), v: ความเร็ว (m/s), E: พลังงาน (J), p: โมเมนตัม (kg·m/s)",
"formulas": [
    "E = mc²",
    "p = mv"
]
},
{
"abbreviation": "m, v, E, W, T, P",
"name": "ฟิสิกส์อนุภาค",
"unit": "m: มวล (kg), v: ความเร็ว (m/s), E: พลังงาน (J), W: การทำงาน (J), T: อุณหภูมิ (K), P: ความดัน (Pa)",
"formulas": [
    "E = mc²",
    "W = Fd",
    "p = mv"
]
}



















];

const searchInput = document.getElementById('searchInput');
const autocompleteBox = document.getElementById('autocompleteBox');
const resultsContainer = document.getElementById('resultsContainer');

// Show autocomplete suggestions
function showSuggestions(value) {
    const query = value.toLowerCase();
    if (!query) {
        autocompleteBox.innerHTML = '';
        displayResults([]); // Clear results when input is empty
        return;
    }

    // Filter suggestions
    const suggestions = data.filter(item =>
        item.abbreviation.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.unit.toLowerCase().includes(query) ||
        item.formulas.some(formula => formula.toLowerCase().includes(query))
    );

    // Display suggestions
    autocompleteBox.innerHTML = suggestions.map(item =>
        `<div onclick="selectSuggestion('${item.name}')">${item.name} (${item.abbreviation})</div>`
    ).join('');

    // Show results below as you type
    displayResults(suggestions);
}

// Select a suggestion
function selectSuggestion(value) {
    searchInput.value = value;
    autocompleteBox.innerHTML = '';
    searchFormulas(value);
}

// Display search results
function displayResults(results) {
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>ไม่พบผลลัพธ์ที่ตรงกัน</p>';
        return;
    }

    resultsContainer.innerHTML = results.map(result =>
        `<div class="result-item">
            <strong>${result.name}</strong><br>
            <ul>
                ${displayUnits(result.unit)}
            </ul>
            <br><strong>สูตร:</strong>
            <ul>
                ${result.formulas.map(formula => `<li>${formula}</li>`).join('')}
            </ul>
        </div>`
    ).join('');
}

// Function to display each unit on a new line as bullet points
function displayUnits(unit) {
    // Split the unit string by commas and display each part on a new line
    const unitParts = unit.split(','); // Split by commas to separate units
    return unitParts.map(part => `<li class="bullet-point">${part.trim()}</li>`).join('');
}

// Trigger full search (optional for future use)
function searchFormulas(query = '') {
    const input = query.toLowerCase() || searchInput.value.toLowerCase();
    const results = data.filter(item =>
        item.abbreviation.toLowerCase().includes(input) ||
        item.name.toLowerCase().includes(input) ||
        item.unit.toLowerCase().includes(input) ||
        item.formulas.some(formula => formula.toLowerCase().includes(input))
    );

    displayResults(results);
}

// Hide autocomplete when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== searchInput) {
        autocompleteBox.innerHTML = '';
    }
});