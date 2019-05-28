const doc = new jsPDF()

const makePdf = (e, inputs) => {
    e.preventDefault();
    
    // let fullName = inputs[1].value + " " + inputs[2].value;
    let fullName = "Shawn Scott";
    // let phoneNumber = inputs[3].value;
    let phoneNumber = "309-642-8576";
    // let email = inputs[4].value;
    let email = "shawn.scott.xd@gmail.com";
    // let linkedInUrl = inputs[5].value;
    let linkedInUrl = "https://www.linkedin.com/in/shawn-scott-23356864/";
    // let githubUrl = inputs[6].value;
    let githubUrl = "https://github.com/BadassBison";
    // let portfolioUrl = inputs[7].value;
    let portfolioUrl = "http://shawnscott.us/";
    // let skills = inputs[8].value;
    let skills = "JavaScript, React.js, Redux, SQL, Git, Ruby, Ruby on Rails, jQuery, HTML5, CSS3";
    // let education = inputs[9].value;
    let education = "App Academy - Immersive software development course with focus on full stack web development  (Spring 2019)\n" +
                    "University Illinois @ Springfield - BS - Accountancy, minor in CS  (Spring 2019)"
    // let project1 = inputs[10].value;
    let project1 = "Dungeon Smash  |  (Javascript, HTML Canvas)\n" +                         
                    "A throwback game where Zelda meets Asteroids\n" +	 
                    "Built an algorithm that enabled spritesheets of any size or design to be used for characters.\n" +
                    "Managed autofiring issues and movement patterns by binding keyboard inputs to an array.\n" +
                    "Implemented collision detection between objects on the screen for a richer experience while playing."

    // let project2 = inputs[11].value;
    let project2 = "Child Labor  |  (React, Redux, MongoDB, Javascript, Express Server, Node.js, Bulma, HTML, CSS)\n" +
                    "An app for children to have fun with their parents while completing chores for bounties.\n" +
                    "Managed a team of 4 to complete this website project within our 4 day deadline.\n" +
                    "Integrated a strict Git workflow, and delegated tasks to team members to reflect their strengths.\n" +
                    "Designed the architecture of the site, schema, routes, frontend state, and design."

    // let project3 = inputs[12].value;
    let project3 = "Scout’s Closet  |  (PHP, MySQL, Bootstrap, HTML, CSS)\n" +
                    "An online baby store for parents to resell their items to other parents in need.\n" +
                    "Implemented a system where the website updates automatically from the daily business transactions.\n" + 
                    "Integrated my accounting knowledge to build a complete employee portal that enabled employees to conduct all the daily business needs.\n" +
                    "Designed the site dynamically so stylesheets would be fetch by date to them the site around specific holidays."
    
    // let experience1 = inputs[13].value;
    let experience1 = "Web Developer\n" +
                        "Scout’s Closet, Nov 2017 - Aug 2018\n" +
                        "Created a backend database for inventory management, with PHP and MySQL\n" +
                        "Implemented features needed for sales/inventory CRUD\n" +
                        "Designed a frontend Ecommerce site that linked to the backend database and updated automatically"
    
    // let experience2 = inputs[14].value;
    let experience2 = "Salesman\n" +
                        "Slumberland Furniture,  Apr 2016 - Apr 2017\n" +
                        "Was the top salesman in our store every month from the first month employed.\n" +
                        "Averaged over $90,000 in sales each month (store average was $44,000).\n" +
                        "Built great relationships with my customers and managed their needs on the most professional level."
    
    // let experience3 = inputs[15].value;
    let experience3 = "Fonder\n" +
    "On The Rocks Adventures,  Jan 2013 - Mar 2016\n" +
    "Led adventure trips for veterans through all over the Colorado Plateau.\n" +
    "A nonprofit that was originally a part-time project, scaled to handle over 50 trips a year.\n" +
    "Managed a team of 8 others to create and complete these wonderful trips."
    
    // let military = inputs[16].value;
    let military = "Behavioral Health Specialist\n" +
                    "United States Army, 14 CSH, Aug 2006 - Oct 2011\n" +
                    "Managed a squad of 8 soldiers, maintained accountability for their readiness at all times.\n" +
                    "Conducted anti insurgency interviews with detainees while deployed in Iraq from 2009 - 2010.\n" +
                    "Was incharge of finding inconsistencies with detainees stories while conducting counseling sessions.\n" +
                    "Managed conflicts and stress related issues from soldiers in high stressful settings.\n" +
                    "Maintained an equipment inventory of over $1,000,000."
    

    let row1 = 24;
    let row2 = 32;
    let row3 = 44;
    let row4 = 56;
    let row5 = 60;
    let row6 = 76;
    let row7 = 80;
    let row8 = 101;
    let row9 = 122;
    let row10 = 150;
    let row11 = 154;
    let row12 = 175;
    let row13 = 196;
    let row14 = 224;
    let row15 = 228;

    // Full name (row1) -------------------------------------------------------------------------
    doc.setFontSize(32);
    doc.setFont('Courier', 'normal');
    doc.setTextColor('#FF845B');
    let xOffset = (doc.internal.pageSize.width/2);
    doc.text(fullName, xOffset, row1, 'center')

    // Phone number, email, links (row2) ---------------------------------------------------------
    doc.setFontSize(10);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    
    doc.text(`Phone ${phoneNumber}      ${email}`, 30, row2);

    doc.setTextColor('#3333FF');
    doc.textWithLink('LinkedIn', 116, row2, {url: linkedInUrl});
    doc.textWithLink('Github', 138, row2, {url: githubUrl});
    doc.textWithLink('Portfolio', 157, row2, {url: portfolioUrl});

    // Skills (row3) ------------------------------------------------------------------------------
    doc.setFontSize(18);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FF845B');
    doc.text('SKILLS', 16, row3);

    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(skills, 42, row3);

    // Education (row4 + row5) ----------------------------------------------------------------------
    doc.setFontSize(18);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FF845B');
    doc.text('EDUCATION', 16, row4);

    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(education, 16, row5);

    // Projects (row6) --------------------------------------------------------
    doc.setFontSize(18);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FF845B');
    doc.text('PROJECTS', 16, row6);

    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(project1, 16, row7);
    
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(project2, 16, row8);
    
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(project3, 16, row9);

    // Experience (row10) -----------------------
    doc.setFontSize(18);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FF845B');
    doc.text('EXPERIENCE', 16, row10);

    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(experience1, 16, row11);
    
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(experience2, 16, row12);
    
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(experience3, 16, row13);

    // Military -----------------
    doc.setFontSize(18);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FF845B');
    doc.text('MILITARY', 16, row14);

    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor('#000000');
    doc.text(military, 16, row15);

    // let x = 20;
    // let y = 15;
    // inputs.forEach(input => {
    //     doc.text(input.value, x, y);
    //     y += 10;
    // })

    doc.save(`${inputs[1].value}\'s_${inputs[0].value}_resume.pdf`)
}


let inputs = document.querySelectorAll(".inp")
window.inputs = inputs;
window.getFonts = doc.getFontList();
let submit = document.querySelector("#submit");
submit.addEventListener("click",e => makePdf(e, inputs));