*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --gold:#ffd54f;
    --orange:#ffb74d;
    --ocean:#26c6da;
    --deep-ocean:#00acc1;
    --white:rgba(255,255,255,0.95);
    --glass:rgba(255,255,255,0.16);
    --glass-border:rgba(255,255,255,0.25);
}

body{
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    min-height:100vh;
    color:white;
    background:
        linear-gradient(
            180deg,
            #ffb74d 0%,
            #ffcc80 25%,
            #4dd0e1 70%,
            #00acc1 100%
        );
    overflow-x:hidden;
}

.background-overlay{
    position:fixed;
    inset:0;
    background:
        radial-gradient(circle at top right,
        rgba(255,255,255,0.25),
        transparent 30%);
    pointer-events:none;
}

.hero{
    text-align:center;
    padding:50px 20px 30px;
    position:relative;
}

.sun{
    width:140px;
    height:140px;
    border-radius:50%;
    background:#ffe082;
    position:absolute;
    top:15px;
    right:5%;
    box-shadow:
        0 0 30px #ffe082,
        0 0 60px #ffe082,
        0 0 100px rgba(255,224,130,.7);
    animation:sunGlow 4s ease-in-out infinite;
}

@keyframes sunGlow{
    0%{
        transform:scale(1);
    }
    50%{
        transform:scale(1.08);
    }
    100%{
        transform:scale(1);
    }
}

.hero h1{
    font-size:3rem;
    font-weight:800;
    text-shadow:0 4px 12px rgba(0,0,0,.2);
    position:relative;
    z-index:2;
}

.hero p{
    margin-top:10px;
    font-size:1.1rem;
    opacity:.95;
}

.container{
    width:min(100%,900px);
    margin:auto;
    padding:20px;
}

.glass-card{
    background:var(--glass);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);

    border:1px solid var(--glass-border);
    border-radius:28px;

    padding:24px;
    margin-bottom:20px;

    box-shadow:
        0 10px 30px rgba(0,0,0,.12);
}

.glass-card h2{
    margin-bottom:15px;
    font-size:1.2rem;
}

.big-number{
    font-size:4rem;
    font-weight:800;
    text-align:center;
}

.wins-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
}

.player-card{
    text-align:center;
}

.score-number{
    font-size:3rem;
    font-weight:800;
    margin:10px 0;
}

.streak-card{
    text-align:center;
}

.streak-owner{
    font-size:2rem;
    font-weight:700;
    margin:10px 0;
}

.streak-number{
    font-size:4rem;
    color:#fff176;
    font-weight:900;
    text-shadow:0 0 15px rgba(255,241,118,.6);
}

.form-group{
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
}

label{
    margin-bottom:8px;
    font-weight:600;
}

input{
    border:none;
    outline:none;

    padding:16px;
    border-radius:16px;

    background:rgba(255,255,255,.92);
    color:#222;

    font-size:1rem;
}

input:focus{
    box-shadow:0 0 0 4px rgba(255,255,255,.3);
}

button{
    width:100%;
    border:none;
    cursor:pointer;

    padding:16px;
    border-radius:16px;

    font-size:1rem;
    font-weight:700;

    transition:.2s ease;
}

button:hover{
    transform:translateY(-2px);
}

#saveBtn{
    background:var(--gold);
    color:#333;
}

#resetBtn{
    background:#ef5350;
    color:white;
}

.danger-card{
    background:rgba(239,83,80,.18);
}

.history-header{
    margin-bottom:10px;
}

.history-item{
    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:12px 0;

    border-bottom:1px solid rgba(255,255,255,.15);
}

.history-item:last-child{
    border-bottom:none;
}

.match-info{
    line-height:1.4;
}

.match-date{
    font-size:.85rem;
    opacity:.8;
}

.delete-btn{
    width:auto;
    background:#ef5350;
    color:white;
    padding:8px 14px;
    border-radius:10px;
    font-size:.85rem;
}

.toast{
    position:fixed;

    left:50%;
    bottom:30px;

    transform:translateX(-50%) translateY(120px);

    background:#2ecc71;
    color:white;

    padding:14px 24px;
    border-radius:50px;

    font-weight:700;

    transition:.35s ease;

    z-index:9999;
}

.toast.show{
    transform:translateX(-50%) translateY(0);
}

@media(max-width:700px){

    .hero h1{
        font-size:2.2rem;
    }

    .sun{
        width:90px;
        height:90px;
    }

    .wins-grid{
        grid-template-columns:1fr;
    }

    .big-number{
        font-size:3rem;
    }

    .score-number{
        font-size:2.5rem;
    }

    .streak-number{
        font-size:3rem;
    }
}