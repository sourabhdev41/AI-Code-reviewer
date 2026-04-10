function analyzeCode() {
    let code = document.getElementById("codeInput").value;
    let result = "";

    if (!code.trim()) {
        result = "❌ Please enter some code.";
    } 
    else {
        // Basic checks
        if (!code.includes(":")) {
            result += "⚠️ Possible syntax issue: Missing ':'\n";
        }

        if (code.includes("while True")) {
            result += "⚠️ Infinite loop detected\n";
        }

        if (code.includes("import datetime")) {
            result += "⚠️ Avoid imports inside functions/loops\n";
        }

        if (code.includes("except:")) {
            result += "⚠️ Avoid bare except (bad practice)\n";
        }

        if (result === "") {
            result = "✅ No obvious issues found (basic check only)";
        }
    }

    document.getElementById("result").innerText = result;
}