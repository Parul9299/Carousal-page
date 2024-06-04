const { app } = require('./app');
let port = 5500;

app.get('/', function (req, res) {

    let slides = [
        {
            img: 1,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        },
        {
            img: 2,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        },
        {
            img: 3,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        },
        {
            img: 4,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        },
        {
            img: 5,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        },
        {
            img: 6,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......'
        }

    ];


    let universities = [
        {
            img: 'manipal_university',
            course: '34 Courses',
            name: 'Manipal University Online',
            link: 'https://amityonline.com/'

        },
        {
            img: 'jain_university',
            course: '48 Courses',
            name: 'Jain University Online',
            link: 'https://onlinejain.com/'

        },
        {
            img: 'LPU_university',
            course: '34 Courses',
            name: 'LPU Online',
            link: 'https://lpuonline.com/'

        },
        {
            img: 'amity_university',
            course: '28 Courses',
            name: 'Amity University Online',
            link: 'https://amityonline.com/'


        },
        {
            img: 'DPU_university',
            course: '52 Courses',
            name: 'DY Patil University Online',
            link: 'https://amityonline.com/'
        },
        {
            img: 'amrita_university',
            course: '22 Courses',
            name: 'Amrita University Online',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'UPES',
            course: '40 Courses',
            name: 'UPES Online',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'BIMTECH',
            course: '11 Courses',
            name: 'BIMTECH Online',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'CU-University',
            course: '11 Courses',
            name: 'Chandigarh University Online',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'LJMU',
            course: '11 Courses',
            name: 'Liverpool John Moores Online',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'iiitb',
            course: '11 Courses',
            name: 'IIIT Bangalore',
            link: 'https://onlineamrita.com/'
        },
        {
            img: 'iim',
            course: '11 Courses',
            name: 'IIM Kozhikode',
            link: 'https://onlineamrita.com/'
        }
    ];

    res.render('index', { slides, universities })
});

app.get('/form', function (req, res) {
    res.render('form')
});

app.get('/courses', function (req, res) {

    let courses = [
        {
            title: 'FRONTEND',
            about: 'Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features. The front end aims at meeting user requirements and delivering a positive user experience.',
            btn: "Click to know more"
        },
        {
            title: 'BACKEND',
            about: 'Back-end development means working on server-side software, which focuses on everything you cannot see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.',
            btn: "Click to know more"
        },
        {
            title: 'DIGITAL MARKETING',
            about: 'Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.',
            btn: "Click to know more"
        },
        {
            title: 'EMAIL MARKETING',
            about: 'Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing. It involves using email to send advertisements, request business, or solicit sales or donations.',
            btn: "Click to know more"
        },
        {
            title: 'MACHINE LEARNING',
            about: 'Machine learning is a subfield of artificial intelligence that uses algorithms trained on data sets to create models that enable machines to perform tasks that would otherwise only be possible for humans, such as categorizing images, analyzing data, or predicting price fluctuations.',
            btn: "Click to know more"
        },
        {
            title: 'DATA STRUCTURE',
            about: 'Data structures such as binary search trees -- also known as an ordered or sorted binary tree -- provide efficient methods of sorting objects, such as character strings used as tags. With data structures such as priority queues, programmers can manage items organized according to a specific priority.',
            btn: "Click to know more"
        }
    ];

    res.render('courses', { courses })

});

app.get('/knowMore', function (req, res) {

    let description = [
        {
            first: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae, et ab cupiditate a corporis, iusto consequatur fugit quas quis explicabo quisquam? Commodi neque possimus beatae? Blanditiis impedit laborum ullam laudantium minima cum tempora reiciendis qui nisi eos, unde, culpa quae, voluptates fugit. Cumque sequi nemo nobis voluptatibus possimus, ea, nulla recusandae, mollitia doloremque quisquam at. Doloribus rerum cupiditate facere voluptatem veritatis reiciendis obcaecati! Quos totam voluptatibus ea sed aperiam nihil quae itaque? Pariatur vel officia sequi amet repellendus, magnam nesciunt minus mollitia, unde odio temporibus dolore quidem nostrum laborum ea, maxime assumenda voluptatem hic doloremque iure velit blanditiis aspernatur.',
        },
        {
            first: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae, et ab cupiditate a corporis, iusto consequatur fugit quas quis explicabo quisquam? Commodi neque possimus beatae? Blanditiis impedit laborum ullam laudantium minima cum tempora reiciendis qui nisi eos, unde, culpa quae, voluptates fugit. Cumque sequi nemo nobis voluptatibus possimus, ea, nulla recusandae, mollitia doloremque quisquam at. Doloribus rerum cupiditate facere voluptatem veritatis reiciendis obcaecati! Quos totam voluptatibus ea sed aperiam nihil quae itaque? Pariatur vel officia sequi amet repellendus, magnam nesciunt minus mollitia, unde odio temporibus dolore quidem nostrum laborum ea, maxime assumenda voluptatem hic doloremque iure velit blanditiis aspernatur.',
        },
        {
            first: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae, et ab cupiditate a corporis, iusto consequatur fugit quas quis explicabo quisquam? Commodi neque possimus beatae? Blanditiis impedit laborum ullam laudantium minima cum tempora reiciendis qui nisi eos, unde, culpa quae, voluptates fugit. Cumque sequi nemo nobis voluptatibus possimus, ea, nulla recusandae, mollitia doloremque quisquam at. Doloribus rerum cupiditate facere voluptatem veritatis reiciendis obcaecati! Quos totam voluptatibus ea sed aperiam nihil quae itaque? Pariatur vel officia sequi amet repellendus, magnam nesciunt minus mollitia, unde odio temporibus dolore quidem nostrum laborum ea, maxime assumenda voluptatem hic doloremque iure velit blanditiis aspernatur.',
        },
        {
            first: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae, et ab cupiditate a corporis, iusto consequatur fugit quas quis explicabo quisquam? Commodi neque possimus beatae? Blanditiis impedit laborum ullam laudantium minima cum tempora reiciendis qui nisi eos, unde, culpa quae, voluptates fugit. Cumque sequi nemo nobis voluptatibus possimus, ea, nulla recusandae, mollitia doloremque quisquam at. Doloribus rerum cupiditate facere voluptatem veritatis reiciendis obcaecati! Quos totam voluptatibus ea sed aperiam nihil quae itaque? Pariatur vel officia sequi amet repellendus, magnam nesciunt minus mollitia, unde odio temporibus dolore quidem nostrum laborum ea, maxime assumenda voluptatem hic doloremque iure velit blanditiis aspernatur.',
        }
    ];

    res.render('knowMore', { description })
});

app.get('/ReadMore', function (req, res) {

    let ReadMorebtns = [
        {
            name: 'HTML',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        },
        {
            name: 'REACT',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        },
        {
            name: 'NODE',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        },
        {
            name: 'JAVA',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        },
        {
            name: 'PYTHON',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        },
        {
            name: 'PHP',
            desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, dolore officia pariatur consequatur tempora nobis ipsum temporibus placeat labore?',
        }
    ];

    res.render('ReadMore', { ReadMorebtns })
});

app.listen(port, function () {
    console.log('server running on: http://localhost:' + port)
});