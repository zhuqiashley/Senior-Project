import { createStore } from 'vuex'

// before line 703 updated for cyber security and data science
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
                    alt: 'Data Science',
                }

            },
            {
                id: 4,
                title: 'Web Development',
                description: 'Complete the video course and complete the quiz exercises. Good luck!',
                image: {
                    src: 'img/Courses/webdev.jpg',
                    alt: 'Big Data',
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
            //Machine Learning and AI
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
            //Web Development
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
                'https://onlinedegrees.und.edu/blog/5-cryptography-tools.html/',
                'https://www.csoonline.com/article/3235970/what-is-quantum-cryptography-it-s-no-silver-bullet-but-could-improve-security.html',
                'https://www.executech.com/insights/top-15-types-of-cybersecurity-attacks-how-to-prevent-them/',
            ],
            //Data Science
            [
                //ch1-5
                'https://www.sisense.com/glossary/data-science-basics/#:~:text=Data%20science%20is%20the%20multidisciplinary,that%20are%20unknown%20and%20unexpected',
                'https://medium.com/data-science-365/pandas-for-data-science-part-1-89bc231b3478#:~:text=as%20an%20argument.-,The%20pandas%20DataFrame,%2C%20bool%2C%20and%20so%20on.',
                'https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html',
                'https://opensource.com/article/20/4/plot-data-python',
                'https://byjus.com/maths/probability-and-statistics/',
            ],
            //Big Data
            [],
            //Machine Learning and AI
            [],
            //Web Development
            [],
            //Metaverse
            [],
            ],
        video:[
            //Cyber Security
            [
                //ch1-5
                'https://www.google.com',
                'https://www.ch2.com',
                'https://www.ch3.com',
                'https://www.ch4.com',
                'https://www.ch5.com',
            ],
            //Data Science
            [],
            //Big Data
            [],
            //Machine Learning and AI
            [],
            //Web Development
            [],
            //Metaverse
            [],
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

