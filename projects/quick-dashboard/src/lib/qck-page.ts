export interface QckPage {
  name: string;
  description?: string;
  icon?: string;
  tags?: string[];
  routerLink?: string;
  href?: string;
}

export interface QckGroup {
  name: string;
  tags?: string;
  icon?: string;

  pages: QckPage[];
}
