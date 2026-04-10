async function analyzeCode() {
    let code = document.getElementById("codeInput").value;
    let resultBox = document.getElementById("result");

    if (!code.trim()) {
        resultBox.innerText = "❌ Please enter some code.";
        return;
    }

    resultBox.innerText = "⏳ Analyzing with AI...";

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "ADD_YOUR_APIKEY", // ADD YOUR KEY HERE
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "nvidia/nemotron-3-nano-30b-a3b:free",
                messages: [
                    {
                        role: "user",
                        content: `You are a senior developer. Review this given code and give:
1. Bugs
2. Bad practices
3. Improvements
4. Score out of 10

Code:
${code}`
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            resultBox.innerText = data.choices[0].message.content;
        } else {
            resultBox.innerText = "❌ No response from AI";
        }

    } catch (error) {
        resultBox.innerText = "❌ Error: " + error.message;
    }
}
