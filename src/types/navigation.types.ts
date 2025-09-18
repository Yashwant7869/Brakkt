export type TabId = 'home' | 'shorts' | 'add' | 'search' | 'profile';

export interface TabItem {
  id: TabId;
  icon: any;
  label: string;
}

export interface NavigationProps {
  activeTab: TabId;
  onTabPress: (tab: TabId) => void;
}