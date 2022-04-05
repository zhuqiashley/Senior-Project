import { createStore } from 'vuex'

// update line 1510
export default createStore({
    state: {
        courses: [
            {
                id: 0,
                title: 'Cyber Security',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/Cyber-Security.jpg',
                    alt: 'Cyber Security',
                }

            },
            {
                id: 1,
                title: 'Data Science',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/data_science.jpg',
                    alt: 'Data Science',
                }

            },
            {
                id: 2,
                title: 'Big Data',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/big_data.jpeg',
                    alt: 'Big Data',
                }

            },
            {
                id: 3,
                title: 'Machine Learning and AI',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/ml-ai.jpg',
                    alt: 'Machine Learning and AI',
                }

            },
            {
                id: 4,
                title: 'Web Development',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/webdev.jpg',
                    alt: 'Web Development',
                }

            },
            {
                id: 5,
                title: "Metaverse",
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/Metaverse.jpg',
                    alt: 'Metaverse',
                }
            }
        ],
        problems: [
            //Cyber Security
            [
                //ch1
                [
                    {
                        "A": "Mail Password",
                        "B": "Email Finder Pro",
                        "C": "Mail PassView",
                        "D": "Sendinc",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Sendinc is not a tool that compromises email data. It is used to protect business email accounts and provides a fast web-based solution for businesses to start delivering secure emails. The other three are email hacking tools.",
                        "content": "Which of the following is not an email-related hacking tool?"
                    },
                    {
                        "A": "botnets",
                        "B": "programs",
                        "C": "virus",
                        "D": "worms",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "Botnets on infected mobile devices are waiting for orders from their owners. It starts a DDoS flood attack after receiving the owner’s instructions. As a result, calls are not connected or data is not sent.",
                        "content": "Which of the following DDoS in mobile systems wait for the owner to trigger the cyber attack?"
                    },
                    {
                        "A": "WPA3",
                        "B": "WPA2",
                        "C": "WPA",
                        "D": "WEP",
                        "answer": 'D',
                        "id": 3,
                        "explanation": " Wireless security is an important aspect of cyber-security. Wired Equivalent Privacy (WEP), Wi-Fi Protected Access (WPA), WPA2, and WPA3 are the most common kinds of wireless security. WEP is a famously insecure encryption protocol.‘",
                        "content": "Which of the following is the least strong security encryption standard?"
                    },
                    {
                        "A": "Trojan",
                        "B": "Antivirus",
                        "C": "Worm",
                        "D": "Virus",
                        "answer": 'C',
                        "id": 4,
                        "explanation": "Stuxnet is a popular and powerful worm that came into existence in mid 2010, which was very powerful as it was accountable for the cause of huge damage to Iran’s Nuclear program. It mainly targets the PLCs (Programmable Logic Controllers) in a system.",
                        "content": "Which of the following is a Stuxnet?"
                    },
                    {
                        "A": "Operating System fingerprinting",
                        "B": "Operating System penetration testing",
                        "C": "Digital-printing",
                        "D": "Machine printing",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "OS fingerprinting is an ethical hacking technique used for determining what operating system (OS) is running on a remote computer. OS Fingerprinting is the practice of examining data packets that come from a network in order to extract intelligence that may be utilized in future assaults. ",
                        "content": "Which of the following ethical hacking technique is used for determining which operating system (OS) is running on a remote computer?"
                    },
                    {
                        "A": "Steganography",
                        "B": "Chorography",
                        "C": "Cryptography",
                        "D": "Authentication",
                        "answer": 'A',
                        "id": 6,
                        "explanation": "Ordinary files are targeted by hackers or other cyber criminals in order to disguise distinct data or information within another data file. You can reduce the risk of data leaking by employing steganography.",
                        "content": "Which of the following can diminish the chance of data leakage?"
                    },
                    {
                        "A": "MiTM attack",
                        "B": "Phishing attack",
                        "C": "Website attack",
                        "D": "DoS attack",
                        "answer": 'B',
                        "id": 7,
                        "explanation": "Phishing is a type of cybercrime in which a person is digitally persuaded to disclose private information. Phishing comes in a variety of forms. Some of them employ malware and emails to divert users to various websites.",
                        "content": "Which of the following is an internet scam done by cyber-criminals where the user is convinced digitally to provide confidential information."
                    },
                    {
                        "A": "Attack",
                        "B": "Exploit",
                        "C": "Vulnerability",
                        "D": "Threat",
                        "answer": 'C',
                        "id": 8,
                        "explanation": "Vulnerability is a term that refers to a weakness in a network or system that an attacker may exploit. Exploiting a weakness in security might have unintended and undesirable consequences.‘",
                        "content": "What is the existence of weakness in a system or network is known as?"
                    },
                    {
                        "A": "MIT",
                        "B": "New York University",
                        "C": "Harvard University",
                        "D": "Bell’s Lab",
                        "answer": 'A',
                        "id": 9,
                        "explanation": "The term “hacker” was coined at MIT (Massachusetts Institute of Technology) because individuals and highly competent professionals use computer languages to address various challenges. In this context, labels such as geeks and nerds have been coined.",
                        "content": "Where did the term “hacker” originate?"
                    },
                    {
                        "A": "Software Security Specialist",
                        "B": "CEO of the organization",
                        "C": "Security Auditor",
                        "D": "IT Security Engineer",
                        "answer": 'D',
                        "id": 10,
                        "explanation": "This is a position in a company or organisation where an individual develops and maintains different systems and security tools for the company or organisation to which he or she belongs.",
                        "content": "IT security in any firm or organization is maintained and handled by ____________________"
                    },
                    {
                        "A": "Digital crime",
                        "B": "Threats",
                        "C": "System hijacking",
                        "D": "Cyber Attack",
                        "answer": 'D',
                        "id": 11,
                        "explanation": "Extortion, identity theft, email hacking, digital surveillance, stealing hardware, mobile hacking, and physical security breaches are all examples of cyber assaults or activities.",
                        "content": "Which of the following is defined as an attempt to harm, damage or cause threat to a system or network?"
                    },
                    {
                        "A": "ip tracker",
                        "B": "emails",
                        "C": "websites",
                        "D": "web pages",
                        "answer": 'C',
                        "id": 12,
                        "explanation": "Enumeration by cyber-attackers is also feasible via websites since attackers target websites in order to obtain the victim’s or target user’s IP address.",
                        "content": "Which of the following do Cyber attackers commonly target for fetching IP address of a target or victim user?"
                    },
                    {
                        "A": "Clickjacking",
                        "B": "Buffer-overflow",
                        "C": "Phishing",
                        "D": "MiTM",
                        "answer": 'B',
                        "id": 13,
                        "explanation": "The excess data that contains certain specific instructions in the memory for actions are projected by a cyber-criminal or penetration tester to break the system in a buffer-overflow attack.",
                        "content": "A cyber-criminal or penetration tester uses the additional data that stores certain special instructions in the memory for activities to break the system in which of the following attack?"
                    },
                    {
                        "A": "Pharming",
                        "B": "Website-Duplication",
                        "C": "Mimicking",
                        "D": "Spamming",
                        "answer": 'D',
                        "id": 14,
                        "explanation": "Pharming is a strategy and approach used by cybercriminals to create phony web pages and sites in order to mislead users into giving over personal information such as login IDs and passwords.",
                        "content": "Which of the following is the hacking approach where cyber-criminals design fake websites or pages for tricking or gaining additional traffic?"
                    },
                    {
                        "A": "Exploit",
                        "B": "Attack",
                        "C": "Threat",
                        "D": "Vulnerability",
                        "answer": 'B',
                        "id": 15,
                        "explanation": "A threat is a possible danger that might lead to a security breach and cause harm to the system or network. Vulnerability is a word that refers to a flaw in a network or system that might be exploited by an attacker. Exploiting a security flaw might result in unexpected and unwanted effects. A cyber-attack is an attempt by attackers to alter, delete, steal or expose any specific data by gaining unauthorized access.",
                        "content": "Which of the following act violates cyber security?"
                    },
                ],
                //ch2
                [
                    {
                        "A": "Threat",
                        "B": "Vulnerability",
                        "C": "Exploit",
                        "D": "Attack",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "Threat can be termed as a possible danger that may lead to breach the cyber security and may cause possible harm to the system or the network.",
                        "content": " ________ is any action that might compromise cyber-security."
                    },
                    {
                        "A": "Threat",
                        "B": "Vulnerability",
                        "C": "Exploit",
                        "D": "Attack",
                        "answer": 'B',
                        "id": 2,
                        "explanation": "Vulnerability is the term used to define weakness in any network or system that can get exploited by an attacker. Exploiting the weakness can lead to the unexpected & undesirable event in cyber security.",
                        "content": "Existence of weakness in a system or network is called _______"
                    },
                    {
                        "A": "Hacktivism",
                        "B": "Whistle-blowing",
                        "C": "Surveillance",
                        "D": "Pseudonymization",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Hacktivism is an act of defacing a website, or any network or system. Systems and networks are compromised with a political or social agenda.",
                        "content": "_________ is an act of hacking by the means of which a political or social message is conveyed."
                    },
                    {
                        "A": "CData copying",
                        "B": "Data masking",
                        "C": "Data breaching",
                        "D": "Data duplicating",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "Data masking is the method used for developing or creating a structurally similar version of data of any organization that is not authentic. These types of unauthentic data are purposefully created for protecting the actual data.",
                        "content": " _______ is the method of developing or creating a structurally similar yet unauthentic and illegitimate data of any firm or company."
                    },
                    {
                        "A": "Data obfuscation",
                        "B": "Data copying",
                        "C": "Data breaching",
                        "D": "Data duplicating",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "Data obfuscation is the alternate term used for data masking, that is used for developing or creating a structurally similar version of data of any organization that is not authentic. These types of unauthentic data are purposefully created for protecting the actual data.",
                        "content": "Data masking is also known as _________"
                    },
                ],
                //ch3
                [
                    {
                        "A": "Data theft",
                        "B": "Forgery",
                        "C": "Damage to data and systems",
                        "D": "Installing antivirus for protection",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Cyber crimes are one of the most threatening terms that is an evolving phase. It is said that major percentage of the World War III will be based on cyber-attacks by cyber armies of different countries.",
                        "content": "Which of the following is not a type of cyber crime?"
                    },
                    {
                        "A": "4",
                        "B": "3",
                        "C": "2",
                        "D": "6",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "Cyber crime can be categorized into 2 types. These are peer-to-peer attack and computer as weapon. In peer-to-peer attack, attackers target the victim users; and in computer as weapon attack technique, computers are used by attackers for a mass attack such as illegal and banned photo leak, IPR violation, pornography, cyber terrorism etc.",
                        "content": "Cyber-crime can be categorized into ________ types."
                    },
                    {
                        "A": "Phishing",
                        "B": "Injecting Trojans to a target victim",
                        "C": "MiTM",
                        "D": "Credit card details leak in deep web",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "Phishing, injecting Trojans and worms to individuals comes under peer-to-peer cyber crime. Whereas, leakage of credit card data of a large number of people in deep web comes under computer as weapon cyber-crime.",
                        "content": "Which of the following is not a type of peer-to-peer cyber-crime?"
                    },
                    {
                        "A": "Credit card fraudulent",
                        "B": "Spying someone using keylogger",
                        "C": "IPR Violation",
                        "D": "Pornography",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "DDoS (Distributed Denial of Service), IPR violation, pornography are mass attacks done using a computer. Spying someone using keylogger is an example of peer-to-peer attack.",
                        "content": "Which of the following is not an example of a computer as weapon cyber-crime?"
                    },
                    {
                        "A": "India’s Technology (IT) Act, 2000",
                        "B": "India’s Digital Information Technology (DIT) Act, 2000",
                        "C": "India’s Information Technology (IT) Act, 2000",
                        "D": "The Technology Act, 2008",
                        "answer": 'C',
                        "id": 5,
                        "explanation": "The Indian legislature thought of adding a chapter that is dedicated to cyber law. This finally brought India’s Information Technology (IT) Act, 2000 which deals with the different cyber-crimes and their associated laws.",
                        "content": "What is the name of the IT law that India is having in the Indian legislature?"
                    },
                ],
                //ch4
                [
                    {
                        "A": "Data-hack",
                        "B": "Data-stealing",
                        "C": "Database altering",
                        "D": "Data breach",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Data breach an activity that takes place when cyber-criminals infiltrates any data source and takes away or alters sensitive information. This is either done using a network to steal all local files or get access physically to a system.",
                        "content": "___________ is an activity that takes place when cyber-criminals infiltrates any data source and takes away or alters sensitive information."
                    },
                    {
                        "A": "Research and info-gathering",
                        "B": "Attack the system",
                        "C": "Fixing the bugs",
                        "D": "Exfiltration",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "During a hack, the cyber-criminals first do a research on the victim gathers information on the victim’s system as well as network. Then perform the attack. Once the attacker gains access it steals away confidential data.",
                        "content": "Which of these is not a step followed by cyber-criminals in data breaching?"
                    },
                    {
                        "A": "Data that will pay once sold",
                        "B": "Data that has no value",
                        "C": "Data like username and passwords only",
                        "D": "Data that is old",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Usually, cyber-criminals steal those data that are confidential and adds value once they are sold to the dark-market or in different deep web sites. Even these days, different companies buy customer data at large for analyzing data and gain profit out of it.",
                        "content": "What types of data are stolen by cyber-criminals in most of the cases?"
                    },
                    {
                        "A": "Business firms",
                        "B": "Medical and Healthcare",
                        "C": "Government and secret agencies",
                        "D": "NGOs",
                        "answer": 'D',
                        "id": 4,
                        "explanation": "Attackers target large organizations and firms that consists of business firms, financial corporations, medical and healthcare firms, government and secret agencies, banking sectors. They’ve valuable information which can cost them huge so major targets for hackers focuses such firms only.",
                        "content": "Which of the companies and organizations do not become the major targets of attackers for data stealing?"
                    },
                    {
                        "A": "do peeping",
                        "B": "perform network jamming",
                        "C": "do shoulder surfing",
                        "D": "teal your laptop",
                        "answer": 'C',
                        "id": 5,
                        "explanation": " An attacker, who is an employee of your firm may do shoulder surfing to know your system password. Shoulder surfing is a social engineering technique used to secretly peep to gain knowledge of your confidential information.",
                        "content": "An attacker, who is an employee of your firm may ___________ to know your system password."
                    },
                ],
                //ch5
                [
                    {
                        "A": "2",
                        "B": "3",
                        "C": "4",
                        "D": "5",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "TCP/IP is extensively used model for the World Wide Web for providing network communications which are composed of 4 layers that work together. Each layer is composed of header and payload.",
                        "content": "TCP/IP is composed of _______ number of layers."
                    },
                    {
                        "A": "ftp",
                        "B": "rexec",
                        "C": "tcpexec",
                        "D": "telnet",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "Trusted TCP/IP commands such as ftp, rexec and telnet have the same needs & go through the identical verification process. Internet & TCP/IP are often implemented synonymously.",
                        "content": "Trusted TCP/IP commands have the same needs & go through the identical verification process. Which of them is not a TCP/IP command?"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 3,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 5 Problem 3"
                    },
                    {
                        "A": "address, name",
                        "B": "address, location",
                        "C": "network, name",
                        "D": "network, location",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "Connection authentication is offered for ensuring that the remote host has the likely Internet Protocol (IP)’s address & name. This avoids a remote host to masquerade as an added remote host.",
                        "content": "Connection authentication is offered for ensuring that the remote host has the likely Internet Protocol (IP) ___________ & _________"
                    },
                    {
                        "A": "Return of Bleichenbacher’s Oracle Team",
                        "B": "Rise of Bleichenbacher’s Oracle Threat",
                        "C": "Return of Bleichenbacher’s Operational Threat",
                        "D": "Return of Bleichenbacher’s Oracle Threat",
                        "answer": 'D',
                        "id": 5,
                        "explanation": "Return of Bleichenbacher’s Oracle Threat is a transport layer vulnerability that allows an attacker to get hold of the RSA key essential to decrypt TLS traffic below certain conditions.",
                        "content": "RoBOT is abbreviated as ___________"
                    },
                ],
            ],
            //Data Science
            [
                //ch1
                [
                    {
                        "A": "Raw data is original source of data",
                        "B": "Preprocessed data is original source of data",
                        "C": "Raw data is the data obtained after processing steps",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "Accounting programs are prototypical examples of data processing applications.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "Define the question",
                        "B": "Create reproducible code",
                        "C": "Challenge results",
                        "D": "All of the mentioned",
                        "answer": 'D',
                        "id": 2,
                        "explanation": "A data scientist is a job title for an employee or business intelligence (BI) consultant who excels at analyzing data, particularly large amounts of data.",
                        "content": "Which of the following is performed by Data Scientist?"
                    },
                    {
                        "A": "Java",
                        "B": "Ruby",
                        "C": "R",
                        "D": "None of the mentioned",
                        "answer": 'C',
                        "id": 3,
                        "explanation": "R is free software for statistical computing and analysis.",
                        "content": "Which of the following is the most important language for Data Science?"
                    },
                    {
                        "A": "Find only one solution for particular problem",
                        "B": "Find out the question which is to be answered",
                        "C": "Find out answer from dataset without asking question",
                        "D": "None of the mentioned",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "Data analysis has multiple facets and approaches.",
                        "content": "Which of the following approach should be used to ask Data Analysis question?"
                    },
                    {
                        "A": "Statistics",
                        "B": "Machine Learning",
                        "C": "Data Visualization",
                        "D": "All of the above",
                        "answer": 'D',
                        "id": 5,
                        "explanation": "Data visualization is the presentation of data in a pictorial or graphical format.",
                        "content": "Which of the following is one of the key data science skills?"
                    },
                ],
                //ch2
                [
                    {
                        "A": "pct_change",
                        "B": "percent_change",
                        "C": "per_change",
                        "D": "none of the mentioned",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "Series, DataFrame, and Panel all have a method pct_change.",
                        "content": "Which of the following is used to compute the percent change over a given number of periods?"
                    },
                    {
                        "A": "Pandas represents timestamps in microsecond resolution",
                        "B": "Pandas is 100% thread safe",
                        "C": "For Series and DataFrame objects, var normalizes by N-1 to produce unbiased estimates",
                        "D": "All of the mentioned",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "Pandas represents timestamps in nanosecond resolution.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "Series",
                        "B": "DataFrame",
                        "C": "Panel",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "DataFrame has a method cov to compute pairwise covariances among the series in the DataFrame, also excluding NA/null values.",
                        "content": "Which of the following object has a method cov to compute covariance between series?"
                    },
                    {
                        "A": "min_periods",
                        "B": "max_periods",
                        "C": "minimum_periods",
                        "D": "all of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "DataFrame.cov also supports an optional min_periods.",
                        "content": "Which of the following specifies the required minimum number of observations for each column pair in order to have a valid result?"
                    },
                    {
                        "A": "lxml is very fast",
                        "B": "lxml requires Cython to install correctly",
                        "C": "lxml does not make any guarantees about the results of it’s parse",
                        "D": "none of the mentioned",
                        "answer": 'C',
                        "id": 5,
                        "explanation": "There are some versioning issues surrounding the libraries that are used to parse HTML tables in the top-level pandas io function read_html.",
                        "content": "Point out the wrong statement."
                    },
                ],
                //ch3
                [
                    {
                        "A": "complicated JSON from facebook API",
                        "B": "complicated JSON from Twitter API",
                        "C": "unformatted excel file",
                        "D": "all of the mentioned",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Tidy data is obtained after processing script.",
                        "content": "This set of tricky Data Science questions and answers focuses on “Tidy Data”."
                    },
                    {
                        "A": "Nearly 80% of data analysis is spent on wrangling data",
                        "B": "Nearly 20% of data analysis is spent on data dredging",
                        "C": "Nearly 80% of data analysis is spent on the cleaning and preparing data",
                        "D": "None of the mentioned",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "Data cleansing is the process of detecting and correcting (or removing) corrupt or inaccurate records from a record set, table, or database.",
                        "content": " Point out the correct statement."
                    },
                    {
                        "A": "each variable in one column",
                        "B": "each observation in different row",
                        "C": "one table for each kind of variable",
                        "D": "none of the mentioned",
                        "answer": 'B',
                        "id": 3,
                        "explanation": "The summary could be the sum of the observations, the number of occurrences, their mean value, and so on.",
                        "content": "Which of the following is a trait of tidy data?"
                    },
                    {
                        "A": "tidyr",
                        "B": "souryr",
                        "C": "NumPy",
                        "D": "all of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "tidyr is used for tidy data with spread and gather functions.",
                        "content": " Which of the following package is used for tidy data?"
                    },
                    {
                        "A": "Data tidying",
                        "B": "Data mining",
                        "C": "Data booting",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "The principles of tidy data provide a standard way to organize data values within a dataset.",
                        "content": "Which of the following process involves structuring datasets to facilitate analysis?"
                    },
                ],
                //ch4
                [
                    {
                        "A": "word",
                        "B": "graph",
                        "C": "lines",
                        "D": "all of the mentioned",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "points and axis are other well known annotation function.",
                        "content": "Which of the following annotation function is used to add or modify text?"
                    },
                    {
                        "A": "grDevices",
                        "B": "grid",
                        "C": "graphics",
                        "D": "all of the mentioned",
                        "answer": 'B',
                        "id": 2,
                        "explanation": "Use grid on to display the major grid lines.",
                        "content": "Which of the following package is implemented by lattice plotting system?"
                    },
                    {
                        "A": "lty",
                        "B": "pch",
                        "C": "lwd",
                        "D": "all of the mentioned",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "lwd is used for line width.",
                        "content": "Which of the following parameter defines line type such as dashed and dotted?"
                    },
                    {
                        "A": "2",
                        "B": "5",
                        "C": "8",
                        "D": "4",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "The base plotting system is highly flexible.",
                        "content": "How many stages commonly occurs in creation of plot?"
                    },
                    {
                        "A": "defined distance metric",
                        "B": "number of clusters",
                        "C": "initial guess as to cluster centroids",
                        "D": "All of the above",
                        "answer": 'D',
                        "id": 5,
                        "explanation": "K-means clustering follows partitioning approach.",
                        "content": "Which of the following is required by K-means clustering?"
                    },
                ],
                //ch5
                [
                    {
                        "A": "mode",
                        "B": "median",
                        "C": "mean",
                        "D": "bayesian inference",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "A probability model connects the data to the population using assumptions.",
                        "content": "The expected value or _______ of a random variable is the center of its distribution."
                    },
                    {
                        "A": "variance",
                        "B": "standard deviation",
                        "C": "empirical mean",
                        "D": "all of the mentioned",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "Densities with a higher variance are more spread out than densities with a lower variance.",
                        "content": "Which of the following of a random variable is a measure of spread?"
                    },
                    {
                        "A": "empirical",
                        "B": "mean",
                        "C": "continuous",
                        "D": "standard",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "Standard Deviation (SD) is the measure of spread of the numbers in a set of data from its mean value.",
                        "content": "The square root of the variance is called the ________ deviation."
                    },
                    {
                        "A": "Chebyshev",
                        "B": "Stautaory",
                        "C": "Testory",
                        "D": "All of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "Chebyshev’s inequality is also spelled as Tchebysheff’s inequality.",
                        "content": "Which of the following inequality is useful for interpreting variances?"
                    },
                    {
                        "A": "10 percent",
                        "B": "20 percent",
                        "C": "30 percent",
                        "D": "3 percent",
                        "answer": 'D',
                        "id": 5,
                        "explanation": "If a bell curve is assumed, the probability of a “six sigma” event is on the order of one ten millionth of a percent.",
                        "content": "Chebyshev’s inequality states that the probability of a “Six Sigma” event is less than ___________"
                    },
                ],
            ],
            //Big Data
            [
                //ch1
                [
                    {
                        "A": "Improved data storage and information retrieval",
                        "B": "Improved extract, transform and load features for data integration",
                        "C": "Improved data warehousing functionality",
                        "D": "Improved security, workload management, and SQL support",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Adding security to Hadoop is challenging because all the interactions do not follow the classic client-server pattern.",
                        "content": "As companies move past the experimental phase with Hadoop, many cite the need for additional capabilities, including _______________"
                    },
                    {
                        "A": "Hadoop do need specialized hardware to process the data",
                        "B": "Hadoop 2.0 allows live stream processing of real-time data",
                        "C": "In the Hadoop programming framework output files are divided into lines or records",
                        "D": "None of the mentioned",
                        "answer": 'B',
                        "id": 2,
                        "explanation": "Hadoop batch processes data distributed over a number of computers ranging in 100s and 1000s.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "Big data management and data mining",
                        "B": "Data warehousing and business intelligence",
                        "C": "Management of Hadoop clusters",
                        "D": "Collecting and storing unstructured data",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Data warehousing integrated with Hadoop would give a better understanding of data.",
                        "content": "According to analysts, for what can traditional IT systems provide a foundation when they’re integrated with big data technologies like Hadoop?"
                    },
                    {
                        "A": "MapReduce, Hive and HBase",
                        "B": "MapReduce, MySQL and Google Apps",
                        "C": "MapReduce, Hummer and Iguana",
                        "D": "MapReduce, Heron and Trumpet",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "To use Hive with HBase you’ll typically want to launch two clusters, one to run HBase and the other to run Hive.",
                        "content": "Hadoop is a framework that works with a variety of related tools. Common cohorts include ____________"
                    },
                    {
                        "A": "Hardtop processing capabilities are huge and its real advantage lies in the ability to process terabytes & petabytes of data",
                        "B": "Hadoop uses a programming model called “MapReduce”, all the programs should conform to this model in order to work on the Hadoop platform",
                        "C": "The programming model, MapReduce, used by Hadoop is difficult to write and test",
                        "D": "All of the above",
                        "answer": 'C',
                        "id": 5,
                        "explanation": "The programming model, MapReduce, used by Hadoop is simple to write and test.",
                        "content": "Point out the wrong statement."
                    },
                ],
                //ch2
                [
                    {
                        "A": "MapReduce",
                        "B": "Mapper",
                        "C": "TaskTracker",
                        "D": "JobTracker",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "TaskTracker receives the information necessary for the execution of a Task from JobTracker, Executes the Task, and Sends the Results back to JobTracker.",
                        "content": " A ________ node acts as the Slave and is responsible for executing a Task assigned to it by the JobTracker."
                    },
                    {
                        "A": "MapReduce tries to place the data and the compute as close as possible",
                        "B": "Map Task in MapReduce is performed using the Mapper() function",
                        "C": "Reduce Task in MapReduce is performed using the Map() function",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "This feature of MapReduce is “Data Locality”.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "Maptask",
                        "B": "Mapper",
                        "C": "Task execution",
                        "D": "All of the mentioned",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Map Task in MapReduce is performed using the Map() function.",
                        "content": " ___________ part of the MapReduce is responsible for processing one or more chunks of data and producing the output results."
                    },
                    {
                        "A": "Reduce",
                        "B": "Map",
                        "C": "Reducer",
                        "D": "All of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "Reduce function collates the work and resolves the results.",
                        "content": "_________ function is responsible for consolidating the results produced by each of the Map() functions/tasks."
                    },
                    {
                        "A": " Java",
                        "B": "C",
                        "C": "C#",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "Hadoop Pipes is a SWIG- compatible C++ API to implement MapReduce applications (non JNITM based).",
                        "content": "Although the Hadoop framework is implemented in Java, MapReduce applications need not be written in ____________"
                    },
                ],
                //ch3
                [
                    {
                        "A": "Hive",
                        "B": "MapReduce",
                        "C": "Pig",
                        "D": "Lucene",
                        "answer": 'B',
                        "id": 1,
                        "explanation": "MapReduce is the heart of hadoop.",
                        "content": "________ is a programming model designed for processing large volumes of data in parallel by dividing the work into a set of independent tasks."
                    },
                    {
                        "A": "Data locality means movement of the algorithm to the data instead of data to algorithm",
                        "B": "When the processing is done on the data algorithm is moved across the Action Nodes rather than data to the algorithm",
                        "C": "Moving Computation is expensive than Moving Data",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "Data flow framework possesses the feature of data locality.",
                        "content": " Point out the correct statement."
                    },
                    {
                        "A": "job-tracker",
                        "B": "map-tracker",
                        "C": "reduce-tracker",
                        "D": "all of the mentioned",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Map-Reduce jobs are submitted on job-tracker.",
                        "content": "The daemons associated with the MapReduce phase are ________ and task-trackers."
                    },
                    {
                        "A": "DataNodes",
                        "B": "TaskTracker",
                        "C": "ActionNodes",
                        "D": "All of the mentioned",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "A heartbeat is sent from the TaskTracker to the JobTracker every few minutes to check its status whether the node is dead or alive.",
                        "content": "The JobTracker pushes work out to available _______ nodes in the cluster, striving to keep the work as close to the data as possible."
                    },
                    {
                        "A": "puts",
                        "B": "gets",
                        "C": "getSplits",
                        "D": "All of the above",
                        "answer": 'C',
                        "id": 5,
                        "explanation": "InputFormat uses their storage locations to schedule map tasks to process them on the tasktrackers.",
                        "content": "InputFormat class calls the ________ function and computes splits for each file and then sends them to the jobtracker."
                    },
                ],
                //ch4
                [
                    {
                        "A": "metastore",
                        "B": "parity",
                        "C": "checksum",
                        "D": "none of the mentioned",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "When a client creates an HDFS file, it computes a checksum of each block of the file and stores these checksums in a separate hidden file in the same HDFS namespace.",
                        "content": "The HDFS client software implements __________ checking on the contents of HDFS files."
                    },
                    {
                        "A": "The HDFS architecture is compatible with data rebalancing schemes",
                        "B": "Datablocks support storing a copy of data at a particular instant of time",
                        "C": "HDFS currently support snapshots",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "A scheme might automatically move data from one DataNode to another if the free space on a DataNode falls below a certain threshold.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "DsImage",
                        "B": "FsImage",
                        "C": "FsImages",
                        "D": "All of the mentioned",
                        "answer": 'B',
                        "id": 3,
                        "explanation": "A corruption of these files can cause the HDFS instance to be non-functional.",
                        "content": "The ____________ and the EditLog are central data structures of HDFS."
                    },
                    {
                        "A": "Data Image",
                        "B": "Datanots",
                        "C": "Snapshots",
                        "D": "All of the mentioned",
                        "answer": 'C',
                        "id": 4,
                        "explanation": "One usage of the snapshot feature may be to roll back a corrupted HDFS instance to a previously known good point in time.",
                        "content": " __________ support storing a copy of data at a particular instant of time."
                    },
                    {
                        "A": "failover",
                        "B": "end",
                        "C": "scalability",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "If the NameNode machine fails, manual intervention is necessary.",
                        "content": "Automatic restart and ____________ of the NameNode software to another machine is not supported."
                    },
                ],
                //ch5
                [
                    {
                        "A": "MergePartitioner",
                        "B": "HashedPartitioner",
                        "C": "HashPartitioner",
                        "D": "All of the mentioned",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "The total number of partitions is the same as the number of reduce tasks for the job.",
                        "content": "Which of the following is the default Partitioner for Mapreduce?"
                    },
                    {
                        "A": "The right number of reduces seems to be 0.95 or 1.75",
                        "B": "Increasing the number of reduces increases the framework overhead",
                        "C": "With 0.95 all of the reduces can launch immediately and start transferring map outputs as the maps finish",
                        "D": "None of the mentioned",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "With 1.75 the faster nodes will finish their first round of reduces and launch a second wave of reduces doing a much better job of load balancing.",
                        "content": "Point out the correct statement."
                    },
                    {
                        "A": "Partitioner",
                        "B": "Compactor",
                        "C": "Collector",
                        "D": "All of the mentioned",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "Partitioner controls the partitioning of the keys of the intermediate map-outputs.",
                        "content": "Which of the following partitions the key space?"
                    },
                    {
                        "A": "set",
                        "B": "reset",
                        "C": "alter",
                        "D": "select",
                        "answer": 'C',
                        "id": 4,
                        "explanation": "Alter is the command used to make changes to an existing table.",
                        "content": "_______ can change the maximum number of cells of a column family."
                    },
                    {
                        "A": "MEMSTORE_FLUSH",
                        "B": "MEMSTORE_FLUSHSIZE",
                        "C": "MAX_FILESIZE",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "Using alter, you can set and remove table scope operators such as MAX_FILESIZE, READONLY, MEMSTORE_FLUSHSIZE, DEFERRED_LOG_FLUSH, etc.",
                        "content": "Which of the following is not a table scope operator?"
                    },
                ],
            ],
            //Machine Learning and AI
            [
                //ch1
                [
                    {
                        "A": "car",
                        "B": "last",
                        "C": "cons",
                        "D": "cdr",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "None.",
                        "content": "In LISP, the function returns the list that results after the first element is removed (the rest f the list), is __________"
                    },
                    {
                        "A": "Printed language and synthesized speech",
                        "B": "Manipulation of physical object",
                        "C": "Locomotion",
                        "D": "All of the mentioned",
                        "answer": 'D',
                        "id": 2,
                        "explanation": "None.",
                        "content": "Which of the following contains the output segments of Artificial Intelligence programming?"
                    },
                    {
                        "A": "John McCarthy",
                        "B": "Marvin Minsky",
                        "C": "Alan Turing",
                        "D": "Allen Newell and Herbert Simon",
                        "answer": 'a',
                        "id": 3,
                        "explanation": "None.",
                        "content": "LISP was created by?"
                    },
                    {
                        "A": "SHRDLU",
                        "B": "SIMD",
                        "C": "BACON",
                        "D": "STUDENT",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "None.",
                        "content": "An Artificial Intelligence system developed by Terry A. Winograd to permit an interactive dialogue about a domain he called blocks-world."
                    },
                    {
                        "A": "the embodiment of human intellectual capabilities within a computer considered to reflect intelligence if it were generated by humans",
                        "B": "a set of computer programs that produce output that would be",
                        "C": "the study of mental faculties through the use of mental models implemented on a computer",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "None.",
                        "content": "Strong Artificial Intelligence is __________"
                    },
                ],
                //ch2
                [
                    {
                        "A": "Problem",
                        "B": "Solution",
                        "C": "Agent",
                        "D": "Observation",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "Task environments will pose a problem and rational agent will find the solution for the posed problem.",
                        "content": "What is the action of task environment in artificial intelligence?"
                    },
                    {
                        "A": "Peer, Environment, Actuators, Sense",
                        "B": "Perceiving, Environment, Actuators, Sensors",
                        "C": "Performance, Environment, Actuators, Sensors",
                        "D": "None of the mentioned",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "Task environment will contain PEAS which is used to perform the action independently.",
                        "content": "What is the expansion if PEAS in task environment?"
                    },
                    {
                        "A": "Partial",
                        "B": "Fully",
                        "C": "Learning",
                        "D": "Both Partial & Fully",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "Partial and fully observable environments are present in artificial intelligence.",
                        "content": "What kind of observing environments are present in artificial intelligence?"
                    },
                    {
                        "A": "Static",
                        "B": "Dynamic",
                        "C": "Semi Dynamic",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "As the problem in crossword puzzle are posed at beginning itself, So it is static.",
                        "content": "What kind of environment is crossword puzzle?"
                    },
                    {
                        "A": "Local",
                        "B": "Deterministic",
                        "C": "Rational",
                        "D": "All of the above",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "Stochastic behavior are rational because it avoids the pitfall of predictability.",
                        "content": "What kind of behavior does the stochastic environment posses?"
                    },
                ],
                //ch3
                [
                    {
                        "A": "Solve the given problem and reach to goal",
                        "B": "To find out which sequence of action will get it to the goal state",
                        "C": " All of the mentioned",
                        "D": "None of the mentioned",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "The problem-solving agents are one of the goal-based agents.",
                        "content": "What is the main task of a problem-solving agent?"
                    },
                    {
                        "A": "The whole problem",
                        "B": "Your Definition to a problem",
                        "C": "Problem you design",
                        "D": "Representing your problem with variable and parameter",
                        "answer": 'D',
                        "id": 2,
                        "explanation": "Because state space is mostly concerned with a problem, when you try to solve a problem, we have to design a mathematical structure to the problem, which can only be through variables and parameters. eg. You have given a 4-gallon jug and another 3-gallon jug. Neither has measuring marker on it. You have to fill the jugs with water. How can you get exactly 2 gallons of water in to 4 gallons. Here the state space can defined as set of ordered pairs integers(x,y), such that x=0,1,2,3 or 4 and y=0,1,2 or 3; X represents the number of gallons in 4 gallon jug and y represents the quantity of water in the 3-gallon jug.",
                        "content": "What is state space?"
                    },
                    {
                        "A": "Input, output",
                        "B": "Problem, solution",
                        "C": "Solution, problem",
                        "D": "Parameters, sequence of actions",
                        "answer": 'B',
                        "id": 3,
                        "explanation": "A search algorithm takes input as a problem and returns a solution to the problem as an output.",
                        "content": "A search algorithm takes _________ as an input and returns ________ as an output."
                    },
                    {
                        "A": "Initial state",
                        "B": "Last state",
                        "C": "Intermediate state",
                        "D": "All of the mentioned",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "A problem has four components initial state, goal test, set of actions, path cost.",
                        "content": "A problem in a search space is defined by one of these state."
                    },
                    {
                        "A": "Extraction",
                        "B": "Abstraction",
                        "C": "Information Retrieval",
                        "D": "Mining of data",
                        "answer": 'B',
                        "id": 5,
                        "explanation": "The process of removing detail from a representation is called abstraction.",
                        "content": "The process of removing detail from a given state representation is called ______"
                    },
                ],
                //ch4
                [
                    {
                        "A": "Depth-first search",
                        "B": "Breadth-first search",
                        "C": "Alpha-beta pruning",
                        "D": "All of the mentioned",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "The alpha-beta search computes the same optimal moves as minimax, but eliminates the branches that can’t influence the final decision.",
                        "content": "Which search is equal to minimax search but eliminates the branches that can’t influence the final decision?"
                    },
                    {
                        "A": "Pruned leaves x and y",
                        "B": "Every states are dependant",
                        "C": "Root is independant",
                        "D": "None of the mentioned",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "The minimax decision are independant of the values of the pruned values x and y because of the root values.",
                        "content": "Which values are independant in minimax search algorithm?"
                    },
                    {
                        "A": "10 states",
                        "B": "8 States",
                        "C": "6 States",
                        "D": "Any depth",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "Alpha–beta pruning can be applied to trees of any depth and it is possible to prune entire subtree rather than leaves.",
                        "content": "To which depth does the alpha-beta pruning can be applied?"
                    },
                    {
                        "A": "Alpha = max",
                        "B": "Beta = min",
                        "C": "Beta = max",
                        "D": "Both Alpha = max & Beta = min",
                        "answer": 'D',
                        "id": 4,
                        "explanation": "Alpha and beta are the values of the best choice we have found so far at any choice point along the path for MAX and MIN.",
                        "content": "Which value is assigned to alpha and beta in the alpha-beta pruning?"
                    },
                    {
                        "A": "Hill climbing search algorithm",
                        "B": "Depth-first search",
                        "C": "Transposition table",
                        "D": "All of the above",
                        "answer": 'C',
                        "id": 5,
                        "explanation": "None. ",
                        "content": " Which is identical to the closed list in Graph search?"
                    },
                ],
                //ch5
                [
                    {
                        "A": "Deductive Systems",
                        "B": "Inductive Systems",
                        "C": "Reasoning with Knowledge Based Systems",
                        "D": "Search Based Systems",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "Refer the definition of Deductive based systems.",
                        "content": "A _________ is used to demonstrate, on a purely syntactic basis, that one formula is a logical consequence of another formula."
                    },
                    {
                        "A": "Expressiveness",
                        "B": "Formalizing Natural Languages",
                        "C": "Many-sorted Logic",
                        "D": "All of the mentioned",
                        "answer": 'D',
                        "id": 2,
                        "explanation": "None.",
                        "content": "The statement comprising the limitations of FOL is/are ____________"
                    },
                    {
                        "A": "First Order Predicate Calculus",
                        "B": "Quantification Theory",
                        "C": "Lower Order Calculus",
                        "D": "All of the mentioned",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "None.",
                        "content": "First Order Logic is also known as ___________"
                    },
                    {
                        "A": "Representational Verification",
                        "B": "Representational Adequacy",
                        "C": "Higher Order Logic",
                        "D": "Inferential Efficiency",
                        "answer": 'C',
                        "id": 4,
                        "explanation": "None.",
                        "content": "The adjective “first-order” distinguishes first-order logic from ___________ in which there are predicates having predicates or functions as arguments, or in which one or both of predicate quantifiers or function quantifiers are permitted."
                    },
                    {
                        "A": "1",
                        "B": "2",
                        "C": "3",
                        "D": "4",
                        "answer": 'B',
                        "id": 5,
                        "explanation": "The two proposition symbols are true and false.",
                        "content": "How many proposition symbols are there in artificial intelligence?"
                    },
                ],
            ],
            //Web Development
            [
                //ch1
                [
                    {
                        "A": "parsing the markup content (HTML)",
                        "B": "parsing style information (CSS, XSL, and so on)",
                        "C": "generating a visual presentation of the formatted content including media files referenced",
                        "D": "parsing style information (CSS only)",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "A rendering engine is a software that draws text and images on the screen. The engine draws structured text from a document (HTML, XML) and formats it properly based on the given style declarations (CSS, XSL, etc). The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user’s device.",
                        "content": "A Rendering engine is not responsible for ________"
                    },
                    {
                        "A": "WebKit",
                        "B": "Gecko",
                        "C": "Trident",
                        "D": "Presto",
                        "answer": 'B',
                        "id": 2,
                        "explanation": "Gecko is a web browser engine used in many applications developed by Mozilla Foundation and the Mozilla Corporation as well as in many other open source software projects. Gecko is free and open-source software subject to the terms of the Mozilla Public License version 2.",
                        "content": "Firefox uses _________ rendering engine."
                    },
                    {
                        "A": "It defers rendering of html page",
                        "B": "It defers script execution until the page has been rendered",
                        "C": "It defers rendering of css attributes",
                        "D": "It is only for internal scripts",
                        "answer": 'B',
                        "id": 3,
                        "explanation": "The defer attribute is a boolean attribute. The script is executed after the page has finished parsing. The defer attribute is used if and only if there is src attribute. Defer is for external not internal scripts.",
                        "content": "What is the use of “defer” attribute?"
                    },
                    {
                        "A": "async and defer attributes of script tag execute before the DOMContentLoaded event",
                        "B": "defer executes each script sequentially",
                        "C": "async executes each script when it is ready",
                        "D": "all older browsers supports async attribute",
                        "answer": 'D',
                        "id": 4,
                        "explanation": "In async attribute, the script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing). Defer, the Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded event. Older browsers doesn’t support async attribute.",
                        "content": "Which of the following statements is false?"
                    },
                    {
                        "A": "Web browser",
                        "B": "Web server",
                        "C": "Web matrix",
                        "D": "Web network",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "A web browser (commonly referred to as a browser) is a software application for retrieving, presenting and traversing information resources on the World Wide Web. A web server process, store and display output to client as per their request. Web matrix is a discontinued cloud-connected website builder and HTML editor for Windows.",
                        "content": "Which of the following is used to read a HTML page and render it?"
                    },
                ],
                //ch2
                [
                    {
                        "A": "Using Drag action",
                        "B": "Using new input type",
                        "C": "Using play and pause action of audio and video elements",
                        "D": "Verifying SVG and Canvas elements",
                        "answer": 'A',
                        "id": 1,
                        "explanation": "While testing of HTML5 for a browser i.e. whether its elements are supported by the browser or not one can use draggable content using Drag action and this action can be called through On-Screen Action operation.",
                        "content": "What does ‘On-Screen Action’ means in the testing of HTML5 applications?"
                    },
                    {
                        "A": "Property checkpoints",
                        "B": "Region checkpoints",
                        "C": "On-Screen Action",
                        "D": "Local STorage",
                        "answer": 'B',
                        "id": 2,
                        "explanation": "Region checkpoints are used to verify a displayed graphics. It is a kind of test operation which gives verification of application’s window or control is displayed correctly or not. Object’s property is verified by region checkpoints which is test operation. Local storage is for storing data.",
                        "content": " What can be used to verify a displayed graphics?"
                    },
                    {
                        "A": "url",
                        "B": "time",
                        "C": "tel",
                        "D": "option",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "<input> element type has new values as ‘url’, ‘email’, ‘datetime’, ‘date’, ‘month’, ‘tel’, ‘time’, ‘number’, ‘search’, ‘color’, ‘range’, ‘datetime-local’, ‘week’.",
                        "content": "Which of the following does not lie under the attribute of <input> and is not supported by Opera?"
                    },
                    {
                        "A": "Indeterminate",
                        "B": "Media",
                        "C": "EI",
                        "D": "Target",
                        "answer": 'A',
                        "id": 4,
                        "explanation": "The indeterminate is actually not an attribute, it is the property of checkbox which can be change via JavaScript.",
                        "content": "Which is the new attribute of <input> element that is used to change the appearance of checkbox?"
                    },
                    {
                        "A": "Media",
                        "B": "Ping",
                        "C": "Hreflang",
                        "D": "Preload",
                        "answer": 'D',
                        "id": 5,
                        "explanation": " Preload is the attribute of the <video> element. Media, ping, hreflang, rel are the attribute used with <a> and <area> elements.",
                        "content": "Which attribute does not lie inside <a> and <area> elements?"
                    },
                ],
                //ch3
                [
                    {
                        "A": "class",
                        "B": "id",
                        "C": "article",
                        "D": "html",
                        "answer": 'B',
                        "id": 1,
                        "explanation": " HTML is Hyper Text Markup Language which is used to create web pages and applications. The id attribute is most used to point to a style in a style sheet, and by JavaScript (via the HTML DOM) to manipulate the element with the specific id. Class is a name given to HTML elements which can be used by CSS and JavaScript for styling the web pages. A self-contained content is called attribute.",
                        "content": "Which attribute specifies a unique alphanumeric identifier to be associated with an element?"
                    },
                    {
                        "A": "tooltip",
                        "B": "dir",
                        "C": "title",
                        "D": "head",
                        "answer": 'C',
                        "id": 2,
                        "explanation": "The extra information about an element is specified by title tag. The information is most often shown as a tooltip text when the mouse moves over the element. List of directory files is given by dir tag which is not supported in HTML5. Tooltip or else infotip is a graphical user interface of an element. Container of metadata is called head.",
                        "content": "Which attribute is used to provide an advisory text about an element or its contents?"
                    },
                    {
                        "A": "dir",
                        "B": "style",
                        "C": "class",
                        "D": "article",
                        "answer": 'B',
                        "id": 3,
                        "explanation": "Style attribute specifies an inline style for an element. The style attribute will override any style set globally, e.g. styles specified in the style tag or in an external style sheet. A self-contained content is called attribute. Class is a name given to HTML elements which can be used by CSS and JavaScript for styling the web pages. List of directory files is given by dir tag which is not supported in HTML5.",
                        "content": "The _____________ attribute specifies an inline style associated with an element, which determines the rendering of the affected element."
                    },
                    {
                        "A": "dataFormatAs",
                        "B": "datafld",
                        "C": "disabled",
                        "D": "datasrc",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "DataFormatAs specifies how data is rendered. The identifier for data source is set by dataSrc. Datafld attribute specifies the column name from the data source object that supplies the bound data. This attribute is specific to Microsoft’s data binding. A Disabled is a boolean attribute which specifies that <input> element should be disabled.",
                        "content": "Which of the following is the attribute that specifies the column name from the data source object that supplies the bound data?"
                    },
                    {
                        "A": "height",
                        "B": "height",
                        "C": "hidefocus",
                        "D": "datasrc",
                        "answer": 'B',
                        "id": 5,
                        "explanation": "Height of element is pixels is specified by height attribute. The hspace attribute specifies the whitespace on left and right side of an object. The hidefocus specifies whether a focused rectangle is drawn around an object. The identifier for data source is set by dataSrc.",
                        "content": "Which of the following is the attribute that specifies additional horizontal space, in pixels, to be reserved on either side of an embedded item like an iframe, applet, image, and so on?"
                    },
                ],
                //ch4
                [
                    {
                        "A": "<details>",
                        "B": "<aside>",
                        "C": "<bdi>",
                        "D": "<article>",
                        "answer": 'C',
                        "id": 1,
                        "explanation": "The additional details the user wants to know as per the demand is fulfilled by <details> tag. Content related to surroundings is given by <aside> tag. <bdi> element is useful when embedding user-generated content with an unknown directional. <article> is self defined independent content which contains data which can be anything including photos, videos, and other contents. It provides a section.",
                        "content": "Which of the following defines a part of text that might be formatted in a different direction from other text?"
                    },
                    {
                        "A": "<figcaption>",
                        "B": "<dialog>",
                        "C": "<caption>",
                        "D": "<figure>",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "The figcaption element can be placed as the first or last child of the figure element. It defines a caption for a figure element. Caption in a table immediately after <table> tag can be given by <caption> tag. The <figure> tag provides section for illustration, diagrams, photos etc. A box else window is defined by <dialog> tag in HTML.",
                        "content": "Which of the following defines a caption for a figure element?"
                    },
                    {
                        "A": "<menuitem> ",
                        "B": "<menu> ",
                        "C": "<nav>",
                        "D": "<class>",
                        "answer": 'A',
                        "id": 3,
                        "explanation": "The menuitem tag is new in HTML5 and as of now is only supported in Firefox 8+ versions. <menuitem> defines a command item that the user can invoke from a popup menu. A list of of commands is defined by <menu> tag. <nav> is set of navigation links. One or more class names are specified by the global <class> attribute.‘",
                        "content": "Which of the following defines a command/menu item that the user can invoke from a popup menu?"
                    },
                    {
                        "A": "<meter>",
                        "B": "<progress>",
                        "C": "<gauge>",
                        "D": "<wbr>",
                        "answer": 'B',
                        "id": 4,
                        "explanation": "Scalar measurement within range or may be a fractional value can be displayed through <meter> tag. Use the progress tag in conjunction with JavaScript to display the progress of a task. <wbr> is used for whether it is okay to add a line break in a text.",
                        "content": "Which of the following tag defines the progress of a task?"
                    },
                    {
                        "A": "<output>",
                        "B": "<keygen>",
                        "C": "<datalist>",
                        "D": "<datalist>",
                        "answer": 'A',
                        "id": 5,
                        "explanation": "The output tag represents the result of a calculation (like one performed by a script). <keygen> has been removed from HTML5 and it specifies a name to <keygen> element which refers to data after it’s submission. <datalist> is a list of pre-defined option for input element. The additional details the user wants to know as per the demand is fulfilled by <details> tag.",
                        "content": "Which of the following defines the result of a calculation?"
                    },
                ],
                //ch5
                [
                    {
                        "A": "browsing offline",
                        "B": "reduction of server load",
                        "C": "speed",
                        "D": "asynchronous",
                        "answer": 'D',
                        "id": 1,
                        "explanation": "Application cache can be helpful in so many ways like we can browse offline, as the cached resources are at local level hence they load at faster speed, it also reduces the load of the server. Asynchronous is one of the problems with the use of application cache due to this the resources which are not required like JavaScript or images will also be downloaded.",
                        "content": "Which of the following is not the benefit of cache application?"
                    },
                    {
                        "A": "CACHE MANIFEST",
                        "B": "CSS stylesheet",
                        "C": "index.html",
                        "D": "image address",
                        "answer": 'A',
                        "id": 2,
                        "explanation": "For offline access, there is a text file named cache manifest. It lists the resources of the browser. For enabling application cache for any app we must include manifest attribute inside an html tag of the document like <html manifest=”text.appcache”> this manifest should be included on every page that we want cached.",
                        "content": "Which line is mandatory in cache manifest file?"
                    },
                    {
                        "A": "network",
                        "B": "cache",
                        "C": "fallback",
                        "D": "cache status",
                        "answer": 'D',
                        "id": 3,
                        "explanation": "If the files are not in cache they come from a list of the files in the network. Cache is the default section. The files those are listed under this header are explicitly cached after downloading for the first time. If the resource is inaccessible then this section will be in use. There is no any rule to list these section, can be listed in any order.",
                        "content": "Which is not the section of manifest?"
                    },
                    {
                        "A": "explicit entries",
                        "B": "master entries",
                        "C": "fallback entries",
                        "D": "idle entries",
                        "answer": 'D',
                        "id": 4,
                        "explanation": "The categories for the resources to fit in are explicit entries, master entries, network entries, fallback entries. Entry can be both fallback and explicit entry. Any HTML file that contains manifest attribute is a master entry. Explicit entries are listed explicitly in the cache section.",
                        "content": "Resources do not fit into _______"
                    },
                    {
                        "A": "Explicit entry",
                        "B": "Network entry",
                        "C": "Fallback entry",
                        "D": "Master entry",
                        "answer": 'B',
                        "id": 5,
                        "explanation": "There are four types of resources in an application cache which are 1) Master Entries 2) Explicit Entries 3) Network Entries 4) Fallback Entries. Resources are explicitly listed in the application’s cache manifest file by the explicit entry. Fallback entry provides fallback entries in the application’s manifest file. Master entries are the resources added to the cache. Network entry executes and load scripts and code from the server, not from the cache.",
                        "content": "Which entry executes and load scripts from the server?"
                    },
                ],
            ],
            //Metaverse
            [
                //ch1
                [
                    {
                        "A": " Cyber Security provides security against malware",
                        "B": "Cyber Security provides security against cyber-terrorists",
                        "C": "Cyber Security protects a system from cyber attacks",
                        "D": "All of the mentioned",
                        "answer": 4,
                        "id": 3,
                        "explanation": "Cyber Security provides security to a system against cyber-attacks by using various technologies, and processes.",
                        "content": "Cyber Security Chapter 1 Problem 1"
                    },
                    {
                        "A": "Cyber security protects criminals",
                        "B": "Cyber security protects internet-connected systems",
                        "C": "Cyber security protects hackers",
                        "D": "None of the mentioned",
                        "answer": 4,
                        "id": 4,
                        "explanation": "It protects internet-connected systems such as hardware, software, and data from cyber-attacks. It aims to reduce cyber attacks against the system, network, and technologies by reducing unauthorized exploitation, vulnerability, and threats.",
                        "content": "Cyber Security Chapter 1 Problem 2"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 5,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 1 Problem 3"
                    },
                    {
                        "A": "Cyber attack",
                        "B": "Computer security",
                        "C": "Cryptography",
                        "D": "Digital hacking",
                        "answer": 4,
                        "id": 8,
                        "explanation": "An effort to steal, spy on, damage, or destroy diverse components of cyberspace, such as computer systems, related peripherals, network systems, and information, is known as a cyber attack.",
                        "content": "Cyber Security Chapter 1 Problem 4"
                    },
                    {
                        "A": "Cloud Security",
                        "B": "Network Security",
                        "C": "Application Security",
                        "D": "All of the above",
                        "answer": 4,
                        "id": 9,
                        "explanation": "Cloud Security: Provides security for the data stored on the cloud. Network Security: Protects the internal network from threats. Application Security: Protects data stored in the application software. ",
                        "content": "Cyber Security Chapter 1 Problem 5"
                    },
                ],
                //ch2
                [
                    {
                        "A": " Cyber Security provides security against malware",
                        "B": "Cyber Security provides security against cyber-terrorists",
                        "C": "Cyber Security protects a system from cyber attacks",
                        "D": "All of the mentioned",
                        "answer": 4,
                        "id": 3,
                        "explanation": "Cyber Security provides security to a system against cyber-attacks by using various technologies, and processes.",
                        "content": "Cyber Security Chapter 2 Problem 1"
                    },
                    {
                        "A": "Cyber security protects criminals",
                        "B": "Cyber security protects internet-connected systems",
                        "C": "Cyber security protects hackers",
                        "D": "None of the mentioned",
                        "answer": 4,
                        "id": 4,
                        "explanation": "It protects internet-connected systems such as hardware, software, and data from cyber-attacks. It aims to reduce cyber attacks against the system, network, and technologies by reducing unauthorized exploitation, vulnerability, and threats.",
                        "content": "Cyber Security Chapter 2 Problem 2"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 5,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 2 Problem 3"
                    },
                    {
                        "A": "Cyber attack",
                        "B": "Computer security",
                        "C": "Cryptography",
                        "D": "Digital hacking",
                        "answer": 4,
                        "id": 8,
                        "explanation": "An effort to steal, spy on, damage, or destroy diverse components of cyberspace, such as computer systems, related peripherals, network systems, and information, is known as a cyber attack.",
                        "content": "Cyber Security Chapter 2 Problem 4"
                    },
                    {
                        "A": "Cloud Security",
                        "B": "Network Security",
                        "C": "Application Security",
                        "D": "All of the above",
                        "answer": 4,
                        "id": 9,
                        "explanation": "Cloud Security: Provides security for the data stored on the cloud. Network Security: Protects the internal network from threats. Application Security: Protects data stored in the application software. ",
                        "content": "Cyber Security Chapter 2 Problem 5"
                    },
                ],
                //ch3
                [
                    {
                        "A": "Cyber Security Chapter 3 Problem 1 A",
                        "B": "Cyber Security Chapter 3 Problem 1 B",
                        "C": "Cyber Security Chapter 3 Problem 1 C",
                        "D": "Cyber Security Chapter 3 Problem 1 D",
                        "answer": 4,
                        "id": 3,
                        "explanation": "Cyber Security provides security to a system against cyber-attacks by using various technologies, and processes.",
                        "content": "Cyber Security Chapter 3 Problem 1"
                    },
                    {
                        "A": "Cyber security protects criminals",
                        "B": "Cyber security protects internet-connected systems",
                        "C": "Cyber security protects hackers",
                        "D": "None of the mentioned",
                        "answer": 4,
                        "id": 4,
                        "explanation": "It protects internet-connected systems such as hardware, software, and data from cyber-attacks. It aims to reduce cyber attacks against the system, network, and technologies by reducing unauthorized exploitation, vulnerability, and threats.",
                        "content": "Cyber Security Chapter 3 Problem 2"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 5,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 3 Problem 3"
                    },
                    {
                        "A": "Cyber attack",
                        "B": "Computer security",
                        "C": "Cryptography",
                        "D": "Digital hacking",
                        "answer": 4,
                        "id": 8,
                        "explanation": "An effort to steal, spy on, damage, or destroy diverse components of cyberspace, such as computer systems, related peripherals, network systems, and information, is known as a cyber attack.",
                        "content": "Cyber Security Chapter 3 Problem 4"
                    },
                    {
                        "A": "Cloud Security",
                        "B": "Network Security",
                        "C": "Application Security",
                        "D": "All of the above",
                        "answer": 4,
                        "id": 9,
                        "explanation": "Cloud Security: Provides security for the data stored on the cloud. Network Security: Protects the internal network from threats. Application Security: Protects data stored in the application software. ",
                        "content": "Cyber Security Chapter 3 Problem 5"
                    },
                ],
                //ch4
                [
                    {
                        "A": " Cyber Security provides security against malware",
                        "B": "Cyber Security provides security against cyber-terrorists",
                        "C": "Cyber Security protects a system from cyber attacks",
                        "D": "All of the mentioned",
                        "answer": 4,
                        "id": 3,
                        "explanation": "Cyber Security provides security to a system against cyber-attacks by using various technologies, and processes.",
                        "content": "Cyber Security Chapter 4 Problem 1"
                    },
                    {
                        "A": "Cyber security protects criminals",
                        "B": "Cyber security protects internet-connected systems",
                        "C": "Cyber security protects hackers",
                        "D": "None of the mentioned",
                        "answer": 4,
                        "id": 4,
                        "explanation": "It protects internet-connected systems such as hardware, software, and data from cyber-attacks. It aims to reduce cyber attacks against the system, network, and technologies by reducing unauthorized exploitation, vulnerability, and threats.",
                        "content": "Cyber Security Chapter 4 Problem 2"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 5,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 4 Problem 3"
                    },
                    {
                        "A": "Cyber attack",
                        "B": "Computer security",
                        "C": "Cryptography",
                        "D": "Digital hacking",
                        "answer": 4,
                        "id": 8,
                        "explanation": "An effort to steal, spy on, damage, or destroy diverse components of cyberspace, such as computer systems, related peripherals, network systems, and information, is known as a cyber attack.",
                        "content": "Cyber Security Chapter 4 Problem 4"
                    },
                    {
                        "A": "Cloud Security",
                        "B": "Network Security",
                        "C": "Application Security",
                        "D": "All of the above",
                        "answer": 4,
                        "id": 9,
                        "explanation": "Cloud Security: Provides security for the data stored on the cloud. Network Security: Protects the internal network from threats. Application Security: Protects data stored in the application software. ",
                        "content": "Cyber Security Chapter 4 Problem 5"
                    },
                ],
                //ch5
                [
                    {
                        "A": " Cyber Security provides security against malware",
                        "B": "Cyber Security provides security against cyber-terrorists",
                        "C": "Cyber Security protects a system from cyber attacks",
                        "D": "All of the mentioned",
                        "answer": 4,
                        "id": 3,
                        "explanation": "Cyber Security provides security to a system against cyber-attacks by using various technologies, and processes.",
                        "content": "Cyber Security Chapter 5 Problem 1"
                    },
                    {
                        "A": "Cyber security protects criminals",
                        "B": "Cyber security protects internet-connected systems",
                        "C": "Cyber security protects hackers",
                        "D": "None of the mentioned",
                        "answer": 4,
                        "id": 4,
                        "explanation": "It protects internet-connected systems such as hardware, software, and data from cyber-attacks. It aims to reduce cyber attacks against the system, network, and technologies by reducing unauthorized exploitation, vulnerability, and threats.",
                        "content": "Cyber Security Chapter 5 Problem 2"
                    },
                    {
                        "A": "August Kerckhoffs",
                        "B": "Bob Thomas",
                        "C": "Robert",
                        "D": "Charles",
                        "answer": 4,
                        "id": 5,
                        "explanation": "August Kerckhoffs, a linguist and German professor at HEC, wrote an essay in the Journal of Military Science in February 1883. Kerckhoff had unwittingly established the foundations for contemporary encryption, earning him the title of ’Father of Computer Security.‘",
                        "content": "Cyber Security Chapter 5 Problem 3"
                    },
                    {
                        "A": "Cyber attack",
                        "B": "Computer security",
                        "C": "Cryptography",
                        "D": "Digital hacking",
                        "answer": 4,
                        "id": 8,
                        "explanation": "An effort to steal, spy on, damage, or destroy diverse components of cyberspace, such as computer systems, related peripherals, network systems, and information, is known as a cyber attack.",
                        "content": "Cyber Security Chapter 5 Problem 4"
                    },
                    {
                        "A": "Cloud Security",
                        "B": "Network Security",
                        "C": "Application Security",
                        "D": "All of the above",
                        "answer": 4,
                        "id": 9,
                        "explanation": "Cloud Security: Provides security for the data stored on the cloud. Network Security: Protects the internal network from threats. Application Security: Protects data stored in the application software. ",
                        "content": "Cyber Security Chapter 5 Problem 5"
                    },
                ],
            ],
        ],
        url:[
            //Cyber Security
            [
                //ch1-5
                'https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html',
                'https://onlinedegrees.und.edu/blog/types-of-cyber-security-threats',
                'https://onlinedegrees.und.edu/blog/5-cryptography-tools.html',
                'https://www.csoonline.com/article/3235970/what-is-quantum-cryptography-it-s-no-silver-bullet-but-could-improve-security.html',
                'https://www.executech.com/insights/top-15-types-of-cybersecurity-attacks-how-to-prevent-them',
            ],
            //Data Science
            [
                //ch1-5
                'https://www.sisense.com/glossary/data-science-basics/#:~:text=Data%20science%20is%20the%20multidisciplinary,that%20are%20unknown%20and%20unexpected',
                'https://medium.com/data-science-365/pandas-for-data-science-part-1-89bc231b3478#:~:text=as%20an%20argument.-,The%20pandas%20DataFrame,%2C%20bool%2C%20and%20so%20on.',
                'https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html',
                'https://opensource.com/article/20/4/plot-data-python',
                'https://byjus.com/maths/probability-and-statistics',
            ],
            //Big Data
            [
                //ch1-5
                'https://hadoop.apache.org',
                'https://www.tutorialspoint.com/hadoop/hadoop_mapreduce.htm',
                'https://databricks.com/glossary/hadoop-distributed-file-system-hdfs',
                'https://www.talend.com/resources/what-is-data-integrity',
                'https://techvidvan.com/tutorials/hadoop-mapreduce-features',
            ],
            //Machine Learning and AI
            [
                //ch1-5
                'https://sitn.hms.harvard.edu/flash/2017/history-artificial-intelligence',
                'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_agents_and_environments.htm',
                'https://www.baeldung.com/cs/informed-vs-uninformed-search',
                'https://www.educative.io/edpresso/what-is-alpha-beta-pruning',
                'https://www.javatpoint.com/first-order-logic-in-artificial-intelligence',
            ],
            //Web Development
            [
                //ch1-5
                'https://www.slimjet.com/en/lp/top-10-browsers.php',
                'https://html.com/document/',
                'https://tdg.docbook.org/tdg/5.0/ref-elements.html#:~:text=The%20common%20attributes%20include%20a,relevant%20to%20a%20particular%20audience.',
                'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
                'https://www.html5rocks.com/en/tutorials/appcache/beginner/#:~:text=A%20manifest%20can%20have%20three,downloaded%20for%20the%20first%20time.',
            ],
            //Metaverse
            [
                //ch1-5
                'https://hadoop.apache.org',
                'https://www.tutorialspoint.com/hadoop/hadoop_mapreduce.htm',
                'https://databricks.com/glossary/hadoop-distributed-file-system-hdfs',
                'https://www.talend.com/resources/what-is-data-integrity',
                'https://techvidvan.com/tutorials/hadoop-mapreduce-features',
            ],
        ],
        video:[
            //Cyber Security
            [
                //ch1-5
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
            //Data Science
            [
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
            //Big Data
            [
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
            //Machine Learning and AI
            [
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
            //Web Development
            [
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
            //Metaverse
            [
                'https://www.youtube.com/embed/i9o70PMqMGY',
                'https://www.youtube.com/embed/_uQrJ0TkZlc',
                'https://www.youtube.com/embed/xoL6WvCARJY',
                'https://www.youtube.com/embed/8cm1x4bC610',
                'https://www.youtube.com/embed/vJEO57B05Sg',
            ],
        ],
        current: [],
        isSubmit:false,
    },
    mutations: {
        setCurrent(state, value) {
            state.current = value
        },
    },
    actions: {},
    modules: {}
})

