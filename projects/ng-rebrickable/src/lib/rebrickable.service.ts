import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RebrickableHttpClient} from './utils/rebrickable-http-client';
import {
  Color,
  ColorQueryParams,
  ColorsQueryParams,
  Element,
  Minifig,
  MinifigPartsQueryParams,
  MinifigQueryParams,
  MinifigSetsQueryParams,
  Part,
  PartCategoriesQueryParams,
  PartCategory,
  PartCategoryQueryParams,
  PartColor,
  PartColorDetails,
  PartColorSetsQueryParams,
  PartColorsQueryParams,
  PartDetails,
  PartInfo,
  PartsQueryParams,
  RebrickableList,
  RebrickableSet,
  SetAlternate,
  SetAlternatesQueryParams,
  SetInventorySet,
  SetMinifigsQueryParams,
  SetPartsQueryParams,
  SetSetsQueryParams,
  SetsQueryParams,
  Theme,
  ThemeQueryParams,
  ThemesQueryParams
} from './types';
import {Logger} from './utils/logger';

@Injectable()
export class RebrickableService {

  constructor(private readonly http: RebrickableHttpClient) {
    Logger.debug('Rebrickable Service initialized');
  }

  /**
   * @description Get a list of all Colors
   * @returns {Observable<RebrickableList<Color>>} - List of Colors
   */
  colors(): Observable<RebrickableList<Color>>;

  /**
   * @description Get a list of all Colors
   * @param {ColorsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<Color>>} - List of Colors
   */
  colors(query: ColorsQueryParams): Observable<RebrickableList<Color>>;

  colors(query?: ColorsQueryParams): Observable<RebrickableList<Color>> {
    Logger.debug('Get Colors with params', query);
    return this.http.get('colors', query);
  }

  /**
   * @description Get details about a specific Color.
   * @param {number} id - A unique value identifying this color.
   * @returns {Observable<Color>} - Color object
   */
  color(id: number): Observable<Color>;

  /**
   * @description Get details about a specific Color.
   * @param {number} id - A unique value identifying this color.
   * @param {ColorQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<Color>} - Color object
   */
  color(id: number, query: ColorQueryParams): Observable<Color>;

  /**
   * @description Get details about a specific Color.
   * @param {string} id - A unique value identifying this color.
   * @returns {Observable<Color>} - Color object
   */
  color(id: string): Observable<Color>;

  /**
   * @description Get details about a specific Color.
   * @param {string} id - A unique value identifying this color.
   * @param {ColorQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<Color>} - Color object
   */
  color(id: string, query: ColorQueryParams): Observable<Color>;

  color(id: number | string, query?: ColorQueryParams): Observable<Color> {
    return this.http.get(`colors/${id}`, query);
  }

  /**
   * @description Return all Themes
   * @returns {Observable<RebrickableList<Theme>>} - list of themes
   */
  themes(): Observable<RebrickableList<Theme>>;

  /**
   * @description Return all Themes
   * @param {ThemesQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<Theme>>} - list of themes
   */
  themes(query: ThemesQueryParams): Observable<RebrickableList<Theme>>;

  themes(query?: ThemesQueryParams): Observable<RebrickableList<Theme>> {
    return this.http.get('themes', query);
  }

  /**
   * @description Return details for a specific Theme
   * @param {number} id - A unique value identifying this theme.
   * @returns {Observable<Theme>} - Theme object
   */
  theme(id: number): Observable<Theme>;

  /**
   * @description Return details for a specific Theme
   * @param {number} id - A unique value identifying this theme.
   * @param {ThemeQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<Theme>} - Theme object
   */
  theme(id: number, query: ThemeQueryParams): Observable<Theme>;

  /**
   * @description Return details for a specific Theme
   * @param {string} id - A unique value identifying this theme.
   * @returns {Observable<Theme>} - Theme object
   */
  theme(id: string): Observable<Theme>;

  /**
   * @description Return details for a specific Theme
   * @param {string} id - A unique value identifying this theme.
   * @param {ThemeQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<Theme>} - Theme object
   */
  theme(id: string, query: ThemeQueryParams): Observable<Theme>;


  theme(id: number | string, query?: ThemeQueryParams): Observable<Theme> {
    return this.http.get(`themes/${id}`, query);
  }

  /**
   * @description Get details about a specific Element ID.
   * @param {number} id - A unique value identifying this element.
   * @returns {Observable<Element>} - Element details
   */
  elementDetails(id: number): Observable<Element>;

  /**
   * @description Get details about a specific Element ID.
   * @param {string} id - A unique value identifying this element.
   * @returns {Observable<Element>} - Element details
   */
  elementDetails(id: string): Observable<Element>;

  elementDetails(id: number | string): Observable<Element> {
    return this.http.get(`elements/${id}`);
  }

  /**
   * @description Get a list of Minifigs.
   * @returns {Observable<RebrickableList<Minifig>>} - List of minifigs
   */
  minifigs(): Observable<RebrickableList<Minifig>>;

  /**
   * @description Get a list of Minifigs.
   * @param {MinifigQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @param {number} query.min_parts - Min number of parts is composed
   * @param {number} query.max_parts - Max number of parts is composed
   * @param {number | string} query.in_set_num - Appears in set
   * @param {number | string} query.in_theme_id - Appears in theme
   * @param {string} query.search - A search term
   * @returns {Observable<RebrickableList<Minifig>>} - List of minifigs
   */
  minifigs(query: MinifigQueryParams): Observable<RebrickableList<Minifig>>;

  minifigs(query?: MinifigQueryParams): Observable<RebrickableList<Minifig>> {
    return this.http.get(`minifigs`, query);
  }

  /**
   * @description Get details for a specific Minifig.
   * @param {number} id - A unique value identifying this minifig
   * @returns {Observable<Minifig>} - Minifig object
   */
  minifig(id: number): Observable<Minifig>;

  /**
   * @description Get details for a specific Minifig.
   * @param {string} id - A unique value identifying this minifig
   * @returns {Observable<Minifig>} - Minifig object
   */
  minifig(id: string): Observable<Minifig>;

  minifig(id: number | string): Observable<Minifig> {
    return this.http.get(`minifigs/${id}`);
  }

  /**
   * @description Get a list of all Inventory Parts in this Minifig.
   * @param {number} id - A unique value identifying this minifig
   * @returns {Observable<RebrickableList<PartInfo>>} - List of minifig parts
   */
  minifigParts(id: number): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Minifig.
   * @param {number} id - A unique value identifying this minifig
   * @param {MinifigPartsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<PartInfo>>} - List of minifig parts
   */
  minifigParts(id: number, query: MinifigPartsQueryParams): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Minifig.
   * @param {string} id - A unique value identifying this minifig
   * @returns {Observable<RebrickableList<PartInfo>>} - List of minifig parts
   */
  minifigParts(id: string): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Minifig.
   * @param {string} id - A unique value identifying this minifig
   * @param {MinifigPartsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<PartInfo>>} - List of minifig parts
   */
  minifigParts(id: string, query: MinifigPartsQueryParams): Observable<RebrickableList<PartInfo>>;

  minifigParts(id: number | string, query?: MinifigPartsQueryParams): Observable<RebrickableList<PartInfo>> {
    return this.http.get(`minifigs/${id}/parts`, query);
  }

  /**
   * @description Get a list of Sets a Minifig has appeared in.
   * @param {number} id - A unique value identifying this minifig
   * @returns {Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>} - List of sets
   */
  minifigSets(id: number): Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>;

  /**
   * @description Get a list of Sets a Minifig has appeared in.
   * @param {number} id - A unique value identifying this minifig
   * @param {MinifigQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>} - List of sets
   */
  minifigSets(id: number, query: MinifigSetsQueryParams): Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>;

  /**
   * @description Get a list of Sets a Minifig has appeared in.
   * @param {string} id - A unique value identifying this minifig
   * @returns {Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>} - List of sets
   */
  minifigSets(id: string): Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>;

  /**
   * @description Get a list of Sets a Minifig has appeared in.
   * @param {string} id - A unique value identifying this minifig
   * @param {MinifigQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>} - List of sets
   */
  minifigSets(id: string, query: MinifigSetsQueryParams): Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>>;

  minifigSets(id: number | string, query?: MinifigSetsQueryParams): Observable<RebrickableList<Omit<RebrickableSet, 'theme_id' | 'year'>>> {
    return this.http.get(`minifigs/${id}/sets`, query);
  }

  /**
   * @description Get a list of all Part Categories.
   * @returns {Observable<RebrickableList<PartCategory>>} - List of part categories
   */
  partCategories(): Observable<RebrickableList<PartCategory>>;

  /**
   * @description Get a list of all Part Categories.
   * @param {PartCategoriesQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<PartCategory>>} - List of part categories
   */
  partCategories(query: PartCategoriesQueryParams): Observable<RebrickableList<PartCategory>>;

  partCategories(query?: PartCategoriesQueryParams): Observable<RebrickableList<PartCategory>> {
    return this.http.get(`part_categories`, query);
  }

  /**
   * @description Get details about a specific Part Category.
   * @param {number} id - A unique value identifying this category
   * @returns {Observable<PartCategory>} - Part Category Object
   */
  partCategory(id: number): Observable<PartCategory>;

  /**
   * @description Get details about a specific Part Category.
   * @param {number} id - A unique value identifying this category
   * @param {PartCategoryQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<PartCategory>} - Part Category Object
   */
  partCategory(id: number, query: PartCategoryQueryParams): Observable<PartCategory>;

  /**
   * @description Get details about a specific Part Category.
   * @param {string} id - A unique value identifying this category
   * @returns {Observable<PartCategory>} - Part Category Object
   */
  partCategory(id: string): Observable<PartCategory>;

  /**
   * @description Get details about a specific Part Category.
   * @param {string} id - A unique value identifying this category
   * @param {PartCategoryQueryParams} query - Query params
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<PartCategory>} - Part Category Object
   */
  partCategory(id: string, query: PartCategoryQueryParams): Observable<PartCategory>;

  partCategory(id: number | string, query?: PartCategoryQueryParams): Observable<PartCategory> {
    return this.http.get(`part_categories/${id}`, query);
  }

  /**
   * @description Get a list of Parts.
   * @returns {Observable<RebrickableList<Part>>} - List of parts
   */
  parts(): Observable<RebrickableList<Part>>;

  /**
   * @description Get a list of Parts.
   * @param {PartsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @param {number | string} query.part_cat_id - Part category id
   * @param {number | string} query.color_id - Color id
   * @param {number | string} query.bricklink_id - Bricklink id
   * @param {number | string} query.brickowl_id - Brickowl id
   * @param {number | string} query.lego_id - Lego id
   * @param {number | string} query.ldraw_id - Ldraw id
   * @param {string} query.search - Which field to use when ordering the results.
   * @param {number | string} query.part_num - Part number
   * @param {number | string} query.part_nums - Array of part numbers
   * @returns {Observable<RebrickableList<Part>>} - List of parts
   */
  parts(query: PartsQueryParams): Observable<RebrickableList<Part>>;

  parts(query?: PartsQueryParams): Observable<RebrickableList<Part>> {
    return this.http.get(`parts`, query);
  }

  /**
   * @description Get details about a specific Part.
   * @param {number} id - A unique value identifying this part
   * @returns {Observable<PartDetails>} - Part object
   */
  part(id: number): Observable<PartDetails>;

  /**
   * @description Get details about a specific Part.
   * @param {string} id - A unique value identifying this part
   * @returns {Observable<PartDetails>} - Part object
   */
  part(id: string): Observable<PartDetails>;

  part(id: number | string): Observable<PartDetails> {
    return this.http.get(`parts/${id}`);
  }

  /**
   * @description Get a list of all Colors a Part has appeared in.
   * @param {number} id - A unique value identifying this part
   * @returns {Observable<RebrickableList<PartColor>>} - List of part colors
   */
  partColors(id: number): Observable<RebrickableList<PartColor>>;

  /**
   * @description Get a list of all Colors a Part has appeared in.
   * @param {number} id - A unique value identifying this part
   * @param {PartColorsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<PartColor>>} - List of part colors
   */
  partColors(id: number, query: PartColorsQueryParams): Observable<RebrickableList<PartColor>>;

  /**
   * @description Get a list of all Colors a Part has appeared in.
   * @param {string} id - A unique value identifying this part
   * @returns {Observable<RebrickableList<PartColor>>} - List of part colors
   */
  partColors(id: string): Observable<RebrickableList<PartColor>>;

  /**
   * @description Get a list of all Colors a Part has appeared in.
   * @param {string} id - A unique value identifying this part
   * @param {PartColorsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<PartColor>>} - List of part colors
   */
  partColors(id: string, query: PartColorsQueryParams): Observable<RebrickableList<PartColor>>;

  partColors(id: number | string, query?: PartColorsQueryParams): Observable<RebrickableList<PartColor>> {
    return this.http.get(`parts/${id}/colors`, query);
  }

  /**
   * @description Get details about a specific Part/Color combination.
   * @param {number} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @returns {Observable<PartColorDetails>} - Details of part color
   */
  partColor(id: number, colorId: number): Observable<PartColorDetails>;

  /**
   * @description Get details about a specific Part/Color combination.
   * @param {number} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @returns {Observable<PartColorDetails>} - Details of part color
   */
  partColor(id: number, colorId: string): Observable<PartColorDetails>;

  /**
   * @description Get details about a specific Part/Color combination.
   * @param {string} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @returns {Observable<PartColorDetails>} - Details of part color
   */
  partColor(id: string, colorId: number): Observable<PartColorDetails>;

  /**
   * @description Get details about a specific Part/Color combination.
   * @param {string} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @returns {Observable<PartColorDetails>} - Details of part color
   */
  partColor(id: string, colorId: string): Observable<PartColorDetails>;

  partColor(id: number | string, colorId: string | number): Observable<PartColorDetails> {
    return this.http.get(`parts/${id}/colors/${colorId}`);
  }

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {number} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: number, colorId: number): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {number} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: number, colorId: string): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {string} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: string, colorId: number): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {string} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: string, colorId: string): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {number} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @param {PartColorSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: number, colorId: number, query: PartColorSetsQueryParams): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {number} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @param {PartColorSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: number, colorId: string, query: PartColorSetsQueryParams): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {string} id - A unique value identifying this part
   * @param {number} colorId - A unique value identifying a color
   * @param {PartColorSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: string, colorId: number, query: PartColorSetsQueryParams): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of all Sets the Part/Color combination has appeared in.
   * @param {string} id - A unique value identifying this part
   * @param {string} colorId - A unique value identifying a color
   * @param {PartColorSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  partColorSets(id: string, colorId: string, query: PartColorSetsQueryParams): Observable<RebrickableList<RebrickableSet>>;

  partColorSets(id: number | string, colorId: string | number, query?: PartColorSetsQueryParams): Observable<RebrickableList<RebrickableSet>> {
    return this.http.get(`parts/${id}/colors/${colorId}/sets`, query);
  }

  /**
   * @description Get a list of Sets.
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  sets(): Observable<RebrickableList<RebrickableSet>>;

  /**
   * @description Get a list of Sets.
   * @param {SetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @param {number} query.min_parts - Min number of parts is composed
   * @param {number} query.max_parts - Max number of parts is composed
   * @param {number | string} query.min_year - Min year
   * @param {number | string} query.max_year - Max year
   * @param {string} query.search - A search term
   * @returns {Observable<RebrickableList<RebrickableSet>>} - List of sets
   */
  sets(query: SetsQueryParams): Observable<RebrickableList<RebrickableSet>>;


  sets(query?: SetsQueryParams): Observable<RebrickableList<RebrickableSet>> {
    return this.http.get(`sets`, query);
  }

  /**
   * @description Get details for a specific Set.
   * @param {number} id -  A unique value identifying this set
   * @returns {Observable<RebrickableSet>} - Set object
   */
  set(id: number): Observable<RebrickableSet>;

  /**
   * @description Get details for a specific Set.
   * @param {number} id -  A unique value identifying this set
   * @returns {Observable<RebrickableSet>} - Set object
   */
  set(id: string): Observable<RebrickableSet>;

  set(id: number | string): Observable<RebrickableSet> {
    return this.http.get(`sets/${id}`);
  }

  /**
   * @description Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can be found in the Set.
   * @param {number} id - A unique value identifying this set
   * @returns {Observable<RebrickableList<SetAlternate>>} - A list of set alternates
   */
  setAlternates(id: number): Observable<RebrickableList<SetAlternate>>;

  /**
   * @description Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can be found in the Set.
   * @param {number} id - A unique value identifying this set
   * @param {SetAlternatesQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<SetAlternate>>} - A list of set alternates
   */
  setAlternates(id: number, query: SetAlternatesQueryParams): Observable<RebrickableList<SetAlternate>>;

  /**
   * @description Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can be found in the Set.
   * @param {string} id - A unique value identifying this set
   * @returns {Observable<RebrickableList<SetAlternate>>} - A list of set alternates
   */
  setAlternates(id: string): Observable<RebrickableList<SetAlternate>>;

  /**
   * @description Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can be found in the Set.
   * @param {string} id - A unique value identifying this set
   * @param {SetAlternatesQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @param {Object} query.ordering - Which field and type to use when ordering the results.
   * @param {'ASC' | 'DESC'} query.ordering.type - Type of ordering.
   * @param {string | string[]} query.ordering.fields - Which field to use when ordering the results.
   * @returns {Observable<RebrickableList<SetAlternate>>} - A list of set alternates
   */
  setAlternates(id: string, query: SetAlternatesQueryParams): Observable<RebrickableList<SetAlternate>>;

  setAlternates(id: number | string, query?: SetAlternatesQueryParams): Observable<RebrickableList<SetAlternate>> {
    return this.http.get(`sets/${id}/alternates`, query);
  }

  /**
   * @description Get a list of all Inventory Minifigs in this Set.
   * @param {number} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setMinifigs(id: number): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Minifigs in this Set.
   * @param {number} id -  A unique value identifying this set
   * @param {SetMinifigsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setMinifigs(id: number, query: SetMinifigsQueryParams): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Minifigs in this Set.
   * @param {string} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setMinifigs(id: string): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Minifigs in this Set.
   * @param {string} id -  A unique value identifying this set
   * @param {SetMinifigsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setMinifigs(id: string, query: SetMinifigsQueryParams): Observable<RebrickableList<SetInventorySet>>;

  setMinifigs(id: number | string, query?: SetMinifigsQueryParams): Observable<RebrickableList<SetInventorySet>> {
    return this.http.get(`sets/${id}/minifigs`, query);
  }

  /**
   * @description Get a list of all Inventory Parts in this Set.
   * @param {number} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<PartInfo>>} - List of part information
   */
  setParts(id: number): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Set.
   * @param {number} id -  A unique value identifying this set
   * @param {SetPartsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<PartInfo>>} - List of part information
   */
  setParts(id: number, query: SetPartsQueryParams): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Set.
   * @param {string} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<PartInfo>>} - List of part information
   */
  setParts(id: string): Observable<RebrickableList<PartInfo>>;

  /**
   * @description Get a list of all Inventory Parts in this Set.
   * @param {string} id -  A unique value identifying this set
   * @param {SetPartsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<PartInfo>>} - List of part information
   */
  setParts(id: string, query: SetPartsQueryParams): Observable<RebrickableList<PartInfo>>;

  setParts(id: number | string, query?: SetPartsQueryParams): Observable<RebrickableList<PartInfo>> {
    return this.http.get(`sets/${id}/parts`, query);
  }

  /**
   * @description Get a list of all Inventory Sets in this Set.
   * @param {number} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setSets(id: number): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Sets in this Set.
   * @param {number} id -  A unique value identifying this set
   * @param {SetSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setSets(id: number, query: SetSetsQueryParams): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Sets in this Set.
   * @param {string} id -  A unique value identifying this set
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setSets(id: string): Observable<RebrickableList<SetInventorySet>>;

  /**
   * @description Get a list of all Inventory Sets in this Set.
   * @param {string} id -  A unique value identifying this set
   * @param {SetSetsQueryParams} query - Query params
   * @param {number} query.page - A page number within the paginated result set.
   * @param {number} query.page_size - Number of results to return per page.
   * @returns {Observable<RebrickableList<SetInventorySet>>} - List of set minifigs
   */
  setSets(id: string, query: SetSetsQueryParams): Observable<RebrickableList<SetInventorySet>>;

  setSets(id: number | string, query?: SetSetsQueryParams): Observable<RebrickableList<SetInventorySet>> {
    return this.http.get(`sets/${id}/sets`, query);
  }
}
