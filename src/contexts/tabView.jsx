import React, { useState } from "react";

function TabView({ tabs = {} }) {
  const [activeTabs, setActiveTabs] = useState(0);

  const tabsActive = (index) => {
    setActiveTabs(index);
  };

  return (
    <div>
      {Object.keys(tabs).length === 0 ? (
        <span>No Tabs</span>
      ) : (
        <div>
          <div className="list-none nav-item justify-between">
            <div className="flex tabs mb-4 justify-between">
              {tabs.map((tabs, index) => (
                <label
                  htmlFor="data"
                  key={index}
                  className={
                    index === activeTabs
                      ? "text-md uppercase border-b-2 px-6 py-5 border-sky-500 text-sky-500"
                      : "text-md uppercase px-6 py-5 text-white"
                  }
                  onClick={() => tabsActive(index)}
                >
                  {tabs.name}
                </label>
              ))}
            </div>
          </div>
          <div className="text-white">{tabs[activeTabs].content}</div>
        </div>
      )}
    </div>
  );
}

export default TabView;
