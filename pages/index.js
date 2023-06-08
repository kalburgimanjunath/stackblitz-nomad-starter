import Header from '../components/Header';
import Footer from '../components/Footer';
import Widgets from '../components/Widgets';
// import styles from '../styles/Home.module.css';
import { Alert } from 'flowbite-react';
import { Tabs } from 'flowbite-react';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Alert color="info">Alert!</Alert>
      <script src="https://cdn.tailwindcss.com"></script>
      <Header />
      <div className="grid grid-cols-3 gap-4 bg-blue-50">
        <div className="grid-cols-1 shadow-md">
          <Widgets title="Recently Active Members" type="members" />
          <Widgets title="Groups" type="groups" />
        </div>
        <div className="grid-cols-2 md:grid-cols-1 gap-2">
          <div>
            <h3>Share whats there in your mind</h3>
          </div>
          <div>
            <Tabs.Group aria-label="Default tabs" style="default">
              <Tabs.Item active title="All updates">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Profile tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Connections">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Groups">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Following">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
            </Tabs.Group>
          </div>
          <div></div>
        </div>
        <div className="grid-cols-1">
          <Widgets title="Upcoming Community Events" />
          <Widgets title="Upcoming Meetups" />
          <Widgets title="Benefits Near Me" />
          <Widgets title="Complete Your Profile" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
