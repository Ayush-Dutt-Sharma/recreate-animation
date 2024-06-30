import './infiniteLoop.css';

const App =()=>{
return <>
   <div class="banner">
        <div class="slider" style={{"--quantity": "10"}}>
            <div class="item" style={{"--position": "1"}}><img src="temp-axar-01.jpeg" alt=""/></div>
            <div class="item" style={{"--position": "2"}}><img src="temp-surya-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "3"}}><img src="temp-jadu-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "4"}}><img src="temp-rohit-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "5"}}><img src="temp-kholi-02.jpg" alt=""/></div>
            <div class="item" style={{"--position": "6"}}><img src="temp-dubey-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "7"}}><img src="temp-hardik-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "8"}}><img src="temp-arsh-01.jpeg" alt=""/></div>
            <div class="item" style={{"--position": "9"}}><img src="temp-boom-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "10"}}><img src="temp-kuldeep-01.jpg" alt=""/></div>
            <div class="item" style={{"--position": "11"}}><img src="temp-pant-01.jpg" alt=""/></div>
        </div>
        <div class="content">
            <h1 data-content="INDIA">
                INDIA
            </h1>
            <div class="model"></div>
        </div>
    </div>
</>
}

export default App;
