/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: companystrengths
 * Interface for CompanyStrengths
 */
export interface CompanyStrengths {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @fieldType text */
  title?: string;
  /** @fieldType text */
  shortDescription?: string;
  /** @fieldType text */
  detailedDescription?: string;
  /** @fieldType image - Contains image URL, render with <Image> component, NOT as text */
  iconImage?: string;
  /** @fieldType number */
  priorityOrder?: number;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @fieldType text */
  title?: string;
  /** @fieldType text */
  shortDescription?: string;
  /** @fieldType text */
  description?: string;
  /** @fieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
  /** @fieldType text */
  slug?: string;
  /** @fieldType number */
  displayOrder?: number;
}
