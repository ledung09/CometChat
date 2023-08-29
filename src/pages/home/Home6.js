import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Home6Tab from '../../Component/Home6Tab';

const data = [
  {
    arg1: "Get your attendees talking with real-time chat. We take care of DevOps with our dynamic auto-scaling platform to ensure your event runs smoothly from start to finish. Have a global event? Use our Message Translation extension to connect users from all over the world.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a831c8ce490f1feb63f3_scaling.svg",
        text: "Auto-Scaling",
        des: "Supports all levels of concurrent users."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a78866e51d177dad0a_customize-1.svg",
        text: "White Label",
        des: "Create a chat experience that aligns with your event branding seamlessly."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a88828d0b942cc454b3e_translation.svg",
        text: "Message Translation",
        des: "Translate text messages in different languages on the fly. Great for international events."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a1235c9cf41daef18dfb_virtual%20event-min.png",
    arg4: {
      url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a195db978c0deea6114b_HeySummit_Logo_Horizontal%201.png",
      text: "HeySummit seamlessly scaled its virtual events platform with CometChat's ready-made in-app messaging solution."
    }
  },
  {
    arg1: "Make healthcare accessible to everyone with our secure all-in-one chat solution with the most secure features. CometChat is completely HIPAA compliant.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144abfd62da474243da27b5_hipaa.svg",
        text: "HIPAA Compliant",
        des: "Keeps sensitive user data private and secure."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144af34cc7014345c36c4ad_masking.svg",
        text: "Data Masking Filter", 
        des: "Hide phone numbers, email addresses and other sensitive information in messages."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/611d2275531fce17968e5d2d_thread.svg",
        text: "Chat History",
        des: "Review previous messages for better record keeping."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144ae202d3fd4223aa45e55_image.png",
    arg4: {
      url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144ae1c91ad283bc54270d7_Kokilaben.png",
      text: "A major hospital in Mumbai used CometChat to successfully deploy a telehealth model in the peak of the Covid-19 pandemic."
    }
  },
  {
    arg1: "Facilitate interactions between members of your online community, and keep the engagement on your platform instead of facilitating them on a separate platform outside of your experience.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a78866e51d177dad0a_customize-1.svg",
        text: "White Label",
        des: "Create a chat experience that aligns with your event branding seamlessly."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a89b7d750c3d05d4b1ce_offline%202.svg",
        text: "Offline Messaging",
        des: "Keep users connected even if they're not online."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a74d74b26d46341090_security-1.svg",
        text: "Security",
        des: "CometChat is SOC 2 Type II certified so users can share images, video and files privately."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144e32c83f8417c6057d8d1_social.png",
    arg4: {}
  },
  {
    arg1: "See sales on your online marketplace skyrocket by enabling safe and secure conversations between buyers and sellers, with the ability to send images and videos of the product, documentation, and much more.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144af34cc7014345c36c4ad_masking.svg",
        text: "Data Masking Filter",
        des: "Hide phone numbers, email addresses and other sensitive information in messages."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a87bec60fc966b55bbad_push.svg",
        text: "Push Notifications",
        des: "Improve outreach campaigns, increase return visits, and capture high-quality leads by sending push notifications to mobile apps and desktop browsers"
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a74d74b26d46341090_security-1.svg",
        text: "Security",
        des: "CometChat is SOC 2 Type II certified so users can share images, video and files privately."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144b130cc7014605836cce5_marketplace.png",
    arg4: {}
  },
  {
    arg1: "CometChat's robust metadata properties allow you to dynamically create chats based on orders, with options to include location-specific data, to ensure a seamless experience for users of your on-demand service app.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a867b725a3e95ab1a8fb_code.svg",
        text: "Metadata",
        des: "Allows you to create chats based on orders."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a888e1cc362a9464e202_location.svg",
        text: "Location Data",
        des: "Customize the experience."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6359a46305810a808d638e33_moderation.svg",
        text: "Moderation",
        des: "Human and AI moderation options ensure a positive experience."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144afff441baa51ec2b7ef6_on-demand.png",
    arg4: {}
  },
  {
    arg1: "Give users multiple ways to have meaningful conversations with private in-app messaging, voice calling and HD video chat. Includes fun features like emojis, stickers, reactions and more. Plus, get the ability to monetize features, like typing indicators, and make it easy for users to delete your app when they're done using it.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a78866e5e2f47dad09_emoji.svg",
        text: "Reactions",
        des: "The ability to react to an individual message with a specific emotion, quickly showing acknowledgment or expressing how you feel in a lightweight way."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a87cb725a39d28b1a92d_video%20chat%202.svg",
        text: "Video Chat",
        des: "Encourage users to meet face-to-face with video."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6359a46305810a808d638e33_moderation.svg",
        text: "Push Notifications",
        des: "Improve outreach campaigns, increase return visits, and capture high-quality leads by sending push notifications to mobile apps and desktop browsers"
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144b0607382c155768ee228_dating.png",
    arg4: {}
  },
  {
    arg1: "Enhance remote learning by enabling teachers to connect with students, parents and colleagues. With support for file sharing, users can collaborate on assignments, and work through problems together in real time.",
    arg2: {
      bub1: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a88892a0a44126c5b550_group.svg",
        text: "Multiple Chat Experiences",
        des: "Individual chats, group chats, group video calls keep students engaged."
      },
      bub2: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a74d74b26d46341090_security-1.svg",
        text: "Security",
        des: "CometChat is SOC 2 Type II certified so users can share images, video and files privately."
      },
      bub3: {
        url: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144a8a562d2513353ce6e3a_collab%20whiteboard.svg",
        text: "Collaborative Whiteboards",
        des: "Connect with other users of the app and collaborate using a Whiteboard."
      }
    },
    arg3: "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144b0ead90aa5a502892167_education.png",
    arg4: {}
  }
]

export default function Home6() {
  return (
    <div className="home6">
      <h2 className="home6-r1">Solutions for Every Kind of Chat</h2>
      <div className="home6-r2">
        <Tab.Container id="left-tabs-example" defaultActiveKey="h6-t1">
            <Nav variant="underline" className="flex">
              <Nav.Item><Nav.Link eventKey="h6-t1" disabled>Top Solutions</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t1">Virtual Events</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t2">Healthcare</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t3">Social Community</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t4">Marketplace</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t5">On-Demand</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t6">Dating</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="h6-t7">Education</Nav.Link></Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="h6-t1">
                <Home6Tab flag={1} no={0} arg1={data[0].arg1} arg2={data[0].arg2} arg3={data[0].arg3} arg4={data[0].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t2">
                <Home6Tab flag={1} no={1} arg1={data[1].arg1} arg2={data[1].arg2} arg3={data[1].arg3} arg4={data[1].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t3">
                <Home6Tab flag={1} no={2} arg1={data[2].arg1} arg2={data[2].arg2} arg3={data[2].arg3} arg4={data[2].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t4">
                <Home6Tab flag={1} no={3} arg1={data[3].arg1} arg2={data[3].arg2} arg3={data[3].arg3} arg4={data[3].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t5">
                <Home6Tab flag={1} no={4} arg1={data[4].arg1} arg2={data[4].arg2} arg3={data[4].arg3} arg4={data[4].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t6">
                <Home6Tab flag={1} no={5} arg1={data[5].arg1} arg2={data[5].arg2} arg3={data[5].arg3} arg4={data[5].arg4} />
              </Tab.Pane>
              <Tab.Pane eventKey="h6-t7">
                <Home6Tab flag={1} no={6} arg1={data[6].arg1} arg2={data[6].arg2} arg3={data[6].arg3} arg4={data[6].arg4} />
              </Tab.Pane>
            </Tab.Content>
      </Tab.Container>
        
      </div>





    </div>
  )
}
