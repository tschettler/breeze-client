
import { AbstractDataServiceAdapter} from './abstract-data-service-adapter';
import { assertParam, assertConfig, Param } from './assert-param';
import { BreezeConfig } from './config';
import { BreezeEnum} from './enum';
import { BreezeEvent } from './event';
import { ComplexArray } from './complex-array';
import { DataService, DataServiceConfig, JsonResultsAdapter, JsonResultsAdapterConfig, NodeContext, NodeMeta } from './data-service';
import { DataType  } from './data-type';
import { EntityAction } from './entity-action';
import { EntityAspect, ComplexAspect, Entity, ComplexObject, StructuralObject, PropertyChangedEventArgs } from './entity-aspect';
import { EntityKey } from './entity-key';
import { EntityManager, EntityManagerConfig, EntityError, EntityChangedEventArgs, SaveContext, SaveBundle, HttpResponse, KeyMapping, ServerError, SaveResult, QueryResult, ValidationErrorsChangedEventArgs, HasChangesChangedEventArgs } from './entity-manager';
import { EntityQuery, FilterQueryOp, BooleanQueryOp, OrderByClause, ExpandClause, SelectClause } from './entity-query';
import { EntityState } from './entity-state';
import { InterfaceRegistry, AjaxAdapter, AjaxConfig, DataServiceAdapter, ModelLibraryAdapter, ChangeRequestInterceptor, UriBuilderAdapter, InterfaceRegistryConfig, AjaxRequestInterceptor } from './interface-registry';
import { KeyGenerator } from './key-generator';
import { LocalQueryComparisonOptions } from './local-query-comparison-options';
import { MappingContext } from './mapping-context';
import { MetadataStore, EntityType, ComplexType, StructuralType, DataProperty, EntityProperty, NavigationProperty, AutoGeneratedKeyType   } from './entity-metadata';
import { NamingConvention } from './naming-convention';
import { Predicate, VisitContext, Visitor, ExpressionContext, UnaryPredicate, BinaryPredicate, AnyAllPredicate, AndOrPredicate, LitExpr, FnExpr, PropExpr } from './predicate';
import { QueryOptions,  FetchStrategy, MergeStrategy } from './query-options';
import { SaveOptions } from './save-options';
import { ValidationError, Validator } from './validate';
import { ValidationOptions } from './validation-options';

import { config, BaseAdapter } from './config';
import { core, Callback, ErrorCallback } from './core';
import { makeRelationArray, makePrimitiveArray, makeComplexArray } from './array';

import { RelationArray } from './relation-array';
import { ArrayChangedArgs } from './observable-array';
export { BreezeConfig, ComplexArray, RelationArray };

export {
  AbstractDataServiceAdapter,
  AjaxAdapter,
  AjaxConfig,
  AjaxRequestInterceptor,
  AndOrPredicate,
  AnyAllPredicate,
  ArrayChangedArgs,
  assertConfig,
  assertParam,
  AutoGeneratedKeyType,
  BaseAdapter,
  BinaryPredicate,
  BreezeEnum,
  BreezeEvent, 
  Callback,
  ChangeRequestInterceptor,
  ComplexAspect,
  ComplexObject,
  ComplexType,
  config,
  core,
  DataProperty,
  DataService,
  DataServiceAdapter,
  DataServiceConfig,
  DataType,
  Entity,
  EntityAction,
  EntityAspect,
  EntityChangedEventArgs,
  EntityError,
  EntityKey,
  EntityManager,
  EntityManagerConfig,
  EntityProperty,
  EntityQuery,
  EntityState,
  EntityType,
  ErrorCallback,
  ExpandClause,
  ExpressionContext,
  FetchStrategy,
  FilterQueryOp,
  FnExpr,
  HasChangesChangedEventArgs,
  HttpResponse,
  InterfaceRegistry,
  InterfaceRegistryConfig,
  JsonResultsAdapter,
  JsonResultsAdapterConfig,
  KeyGenerator,
  KeyMapping,
  LitExpr,
  LocalQueryComparisonOptions,
  makeComplexArray,
  makePrimitiveArray,
  makeRelationArray,
  MappingContext,
  MergeStrategy,
  MetadataStore,
  ModelLibraryAdapter,
  NamingConvention,
  NavigationProperty,
  NodeContext,
  NodeMeta,
  OrderByClause,
  Predicate,
  PropertyChangedEventArgs,
  PropExpr,
  QueryOptions,
  QueryResult,
  SaveBundle,
  SaveContext,
  SaveOptions,
  SaveResult,
  SelectClause,
  ServerError,
  StructuralObject,
  StructuralType,
  UnaryPredicate,
  UriBuilderAdapter,
  ValidationErrorsChangedEventArgs,
  ValidationError,
  ValidationOptions,
  Validator,
  VisitContext,
  Visitor,
};

// create a breeze variable here
export const breeze = {
  AbstractDataServiceAdapter: AbstractDataServiceAdapter,
  assertConfig: null as any,
  assertParam: null as any,
  AutoGeneratedKeyType: AutoGeneratedKeyType,
  BooleanQueryOp: BooleanQueryOp,
  ComplexAspect: ComplexAspect,
  ComplexType: ComplexType,
  config: config,
  core: core,
  DataProperty: DataProperty,
  DataService: DataService,
  DataType: DataType,
  EntityAction: EntityAction,
  EntityAspect: EntityAspect,
  EntityKey: EntityKey,
  EntityManager: EntityManager,
  EntityQuery: EntityQuery,
  EntityState: EntityState,
  EntityType: EntityType,
  Event: BreezeEvent,
  FetchStrategy: FetchStrategy,
  FilterQueryOp: FilterQueryOp,
  InterfaceRegistry: InterfaceRegistry,
  JsonResultsAdapter: JsonResultsAdapter,
  KeyGenerator: KeyGenerator,
  LocalQueryComparisonOptions: LocalQueryComparisonOptions,
  makeComplexArray: makeComplexArray,
  makePrimitiveArray: makePrimitiveArray,
  makeRelationArray: makeRelationArray,
  MergeStrategy: MergeStrategy,
  MetadataStore: MetadataStore,
  NamingConvention: NamingConvention,
  NavigationProperty: NavigationProperty,
  OrderByClause: OrderByClause, // for testing only
  Param,
  Predicate: Predicate,
  QueryOptions: QueryOptions,
  SaveOptions: SaveOptions,
  ValidationError: ValidationError,
  ValidationOptions: ValidationOptions,
  Validator: Validator,
  version: "2.1.0"
};

// breeze.assertConfig = assertConfig as any;
// breeze.assertParam = assertParam as any;

export namespace promises {
  /** no-op for backward compatibility with breeze-bridge2-angular */
  export interface IPromiseService {}
}

/** @hidden @internal */
declare var window: any;

/** @hidden @internal */
declare var global: any;

/** @hidden @internal */
let win: any;
try {
  win = window ? window : (global ? global.window : undefined);
} catch (e) {

}
if (win) {
  win.breeze = breeze;
}
